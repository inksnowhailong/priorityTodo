// src/command.rs
use crate::entities::task::Task;
use crate::tasks::itask_manage::ITaskManage;
// 引入 Task 结构体
use crate::tasks::task_manage::TaskManager; // 引入 TaskManager 结构体

pub fn add_task(task: Task) -> String {
    let mut task_manager = TaskManager::new();
    match task_manager.crate_task(task) {
        Ok(_) => "Task added successfully".to_string(),
        Err(e) => format!("Error: {}", e),
    }
}
