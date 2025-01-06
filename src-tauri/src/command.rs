// src/command.rs
use crate::entities::task::Task;
use crate::tasks::itask_manage::ITaskManage;
// 引入 Task 结构体
use crate::tasks::task_manage::TaskManager; // 引入 TaskManager 结构体
use crate::persistence::sqlite_persistence::SqlitePersistence; // 引入 SqlitePersistence 结构体
pub fn crate_task(task: Task) -> String {
    let sqlite_persistence = Box::new(SqlitePersistence::new());
    let mut task_manager = TaskManager::new(sqlite_persistence);
    println!("task: {:?}", task);
    match task_manager.crate_task(task) {
        Ok(_) => "Task added successfully".to_string(),
        Err(e) => format!("Error: {}", e),
    }
}
