pub mod notify;
use crate::notify::Message;
use crate::notify::notify_trait::Notify;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(title: &str,content: &str) -> String {
    Message::notify(title, content, None);
    "Hello, ! You've been greeted from Rust!".to_string()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
