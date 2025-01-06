use entities::task::Task;
use serde::de::DeserializeOwned;
use serde_json;
use tauri::tray::TrayIconBuilder;
use tauri::Manager;
use tauri::{
    menu::{Menu, MenuItem},
}; // 引入 Task 和相关类型]
mod command;
mod entities;
mod persistence;
mod tasks;
fn simulate_receive_task_json<T>(json_data: String) -> Result<T, serde_json::Error>
where
    T: DeserializeOwned, // 添加约束，T 必须实现 Deserialize trait
{
    // 将 JSON 字符串反序列化为 T 类型
    let task: T = serde_json::from_str(&json_data)?;
    Ok(task)
}

#[tauri::command]
fn invok_command(command: &str, json_data: String) -> String {
    println!("Command: {}, JSON data: {}", command, json_data);
    match command {
        "crate_task" => match simulate_receive_task_json::<Task>(json_data) {
            Ok(task) => command::crate_task(task),
            Err(e) => format!("data Error: {}", e),
        },
        _ => "Unknown command".to_string(),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let hide_i = MenuItem::with_id(app, "hide", "隐藏", true, None::<&str>)?;
            let show_i = MenuItem::with_id(app, "show", "展示", true, None::<&str>)?;
            let menu = Menu::with_items(app, &[&hide_i,&show_i])?;

            let tray = TrayIconBuilder::new()
                .menu(&menu)
                .menu_on_left_click(false)
                .on_menu_event(|app, event| match event.id.as_ref() {
                    "hide" => {
                        let window = app.get_window("main").unwrap();
                        println!("Hiding window...");
                        window.hide().unwrap();app.get_webview("main").unwrap().hide().unwrap();
                    }
                    "show" => {
                        let window = app.get_window("main").unwrap();
                        println!("Showing window...");
                        window.show().unwrap();
                    }
                    _ => {
                      println!("menu item {:?} not handled", event.id);
                    }
                  })
                .icon(app.default_window_icon().unwrap().clone())
                .build(app);
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![invok_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
