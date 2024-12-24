use entities::task::Task;
use serde::de::DeserializeOwned;
use serde_json; // 引入 Task 和相关类型]
mod command;
mod entities;
mod tasks; // 确保导出了 tasks 模块

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
        "add_task" => match simulate_receive_task_json::<Task>(json_data) {
            Ok(task) => command::add_task(task),
            Err(e) => format!("Error: {}", e),
        },
        _ => "Unknown command".to_string(),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![invok_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
