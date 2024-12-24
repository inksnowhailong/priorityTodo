// src/tasks/task_manage.rs

use crate::entities::task::Task;  // 引入 Task 结构体
use crate::tasks::itask_manage::ITaskManage;  // 引入 ITaskManage trait

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
    fn add_task(&mut self, task: Task) -> Result<(), String> {
        self.tasks.push(task);
        Ok(())
    }

    fn remove_task(&mut self, task_id: i32) -> Result<(), String> {
        if let Some(pos) = self.tasks.iter().position(|t| t.id == task_id) {
            self.tasks.remove(pos);
            Ok(())
        } else {
            Err(format!("Task with ID {} not found", task_id))
        }
    }

    fn get_task(&self, task_id: i32) -> Result<Task, String> {
        self.tasks.iter()
        .find(|task| task.id == task_id)  // 这里已经是 &Task，避免解引用
        .cloned()  // 克隆出 Task
        .ok_or_else(|| format!("Task with ID {} not found", task_id))
    }

    fn get_all_tasks(&self) -> Result<Vec<Task>, String> {
        Ok(self.tasks.clone())
    }

    fn update_task(&mut self, task: Task) -> Result<(), String> {
        if let Some(existing_task) = self.tasks.iter_mut().find(|t| t.id == task.id) {
            *existing_task = task;
            Ok(())
        } else {
            Err(format!("Task with ID {} not found", task.id))
        }
    }
}
