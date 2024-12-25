use crate::entities::task::Task;
use crate::tasks::itask_manage::IPersistence;

pub struct SqlitePersistence {}

impl SqlitePersistence {
    pub fn new() -> Self {
        SqlitePersistence {}
    }
}
impl IPersistence for SqlitePersistence {
    fn save_task(&mut self, task: &Task) -> Result<(), String> {
        Ok(())
    }

    fn update_task(&mut self, task: &Task) -> Result<(), String> {
        Ok(())
    }

    fn get_task_by_id(&self, task_id: String) -> Result<Option<Task>, String> {
        Ok(None)
    }

    fn get_tasks_by_time(&self) -> Result<Vec<Task>, String> {
        Ok(vec![])
    }

    fn delete_task(&mut self, task_id: String) -> Result<(), String> {
        Ok(())
    }
}
