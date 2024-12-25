// src/tasks/itask_manage.rs
use crate::entities::task::Task; // 引入 Task 结构体

/**待办管理的特征 */
pub trait ITaskManage {
    fn crate_task(&mut self, task: Task) -> Result<Task, String>;
    fn modify_task(&mut self, task: Task) -> Result<Task, String>;
    fn query_task_by_time(&self, start_time: i64, end_time: i64) -> Result<Vec<Task>, String>;
    fn delete_task(&mut self, task_id: i32) -> Result<Task, String>;
    fn complete_task(&mut self, task_id: i32) -> Result<Task, String>;
}

