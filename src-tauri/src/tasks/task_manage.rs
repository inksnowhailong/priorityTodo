// src/tasks/task_manage.rs

use crate::entities::task::Task; // 引入 Task 结构体
use crate::tasks::itask_manage::ITaskManage; // 引入 ITaskManage trait

pub struct TaskManager {
    tasks: Vec<Task>,
}

impl TaskManager {
    pub fn new() -> Self {
        TaskManager { tasks: Vec::new() }
    }
}

// 为 TaskManager 实现 ITaskManage trait
impl ITaskManage for TaskManager {
    fn crate_task(&mut self, task: Task) -> Result<Task, String> {
        let mut task = task;
        let task_id = Task::get_id();
        task.id = Some(task_id);
        Ok(task)
    }

    fn modify_task(&mut self, task: Task) -> Result<Task, String> {
        return Err("开发中 todo!()".to_string());
    }

    fn query_task_by_time(&self, start_time: i64, end_time: i64) -> Result<Vec<Task>, String> {
        return Err("开发中 todo!()".to_string());
    }

    fn delete_task(&mut self, task_id: i32) -> Result<Task, String> {
        return Err("开发中 todo!()".to_string());
    }

    fn complete_task(&mut self, task_id: i32) -> Result<Task, String> {
        return Err("开发中 todo!()".to_string());
    }
}
