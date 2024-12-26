// src/tasks/itask_manage.rs
use crate::entities::task::Task; // 引入 Task 结构体

/**待办管理的特征 */
pub trait ITaskManage {
    fn crate_task(&mut self, task: Task) -> Result<Task, String>;
    fn modify_task(&mut self, task: Task) -> Result<Task, String>;
    fn query_task_by_time(&self, start_time: u64, end_time: u64) -> Result<Vec<Task>, String>;
    fn delete_task(&mut self, task_id: String) -> Result<Task, String>;
    fn complete_task(&mut self, task_id: String) -> Result<Task, String>;
}

/**
 * 持久化特征
 */
pub trait IPersistence {
    // 持久化一个任务
    fn save_task(&mut self, task: &Task) -> Result<(), String>;

    // // 更新任务
    // fn update_task(&mut self, task: &Task) -> Result<(), String>;

    // // 通过ID查找任务
    // fn get_task_by_id(&self, task_id: String) -> Result<Option<Task>, String>;

    // // 根据时间范围获取任务
    // fn get_tasks_by_time(&self) -> Result<Vec<Task>, String>;

    // // 删除任务
    // fn delete_task(&mut self, task_id: String) -> Result<(), String>;
}
