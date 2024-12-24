// src/tasks/itask_manage.rs
use crate::entities::task::Task; // 引入 Task 结构体

/**待办管理的特征 */
pub trait ITaskManage {
    fn add_task(&mut self, task: Task) -> Result<(), String>;
    fn remove_task(&mut self, task_id: i32) -> Result<(), String>;
    fn get_task(&self, task_id: i32) -> Result<Task, String>;
    fn get_all_tasks(&self) -> Result<Vec<Task>, String>;
    fn update_task(&mut self, task: Task) -> Result<(), String>;
}
