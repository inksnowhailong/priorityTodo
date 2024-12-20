// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod entities; // 引入 entities 模块
use entities::task::Task;
use serde_json; // 引入 Task 和相关类型

fn simulate_receive_task_json(json_data: &str) -> Result<Task, serde_json::Error> {
    // 将 JSON 字符串反序列化为 Task 类型
    let task: Task = serde_json::from_str(json_data)?;
    Ok(task)
}

fn main() {
    prioritytodo_lib::run();
    // 模拟前端传递的 JSON 数据


}
