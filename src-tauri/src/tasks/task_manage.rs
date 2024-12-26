// src/tasks/task_manage.rs

use crate::entities::task::Task; // 引入 Task 结构体
use crate::tasks::itask_manage::{IPersistence, ITaskManage}; // 引入 ITaskManage trait

pub struct TaskManager {
    pub persistence: Box<dyn IPersistence>,
}

impl TaskManager {
    pub fn new(persistence: Box<dyn IPersistence>) -> Self {
        TaskManager { persistence }
    }
}

// 为 TaskManager 实现 ITaskManage trait
impl ITaskManage for TaskManager {
    fn crate_task(&mut self, task: Task) -> Result<Task, String> {
        let mut task = task;
        let task_id = Task::get_id();
        task.id = Some(task_id);
        self.persistence.save_task(&task)?;
        Ok(task)
    }

    fn modify_task(&mut self, task: Task) -> Result<Task, String> {
        return Err("开发中 todo!()".to_string());
    }

    fn query_task_by_time(&self, start_time: u64, end_time: u64) -> Result<Vec<Task>, String> {
        return Err("开发中 todo!()".to_string());
    }

    fn delete_task(&mut self, task_id: String) -> Result<Task, String> {
        return Err("开发中 todo!()".to_string());
    }

    fn complete_task(&mut self, task_id: String) -> Result<Task, String> {
        return Err("开发中 todo!()".to_string());
    }
}
