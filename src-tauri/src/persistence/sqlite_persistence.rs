use crate::entities::task::Task;
use crate::tasks::itask_manage::IPersistence;
// use sqlite::*;

pub struct SqlitePersistence {
    // pub db: Connection,
}

impl SqlitePersistence {
    pub fn new() -> Self {
        // let db = sqlite::open("tasks.db").unwrap();;
     SqlitePersistence {  }
    }
    fn create_tables(&self) {
        // self.db
        //     .execute(
        //         "CREATE TABLE IF NOT EXISTS tasks (
        //     id TEXT PRIMARY KEY NOT NULL,
        //     task_name TEXT NOT NULL,
        //     description TEXT NOT NULL,
        //     category TEXT NOT NULL,
        //     importance TEXT NOT NULL,
        //     time_remaining INTEGER ,
        //     estimated_time INTEGER ,
        //     task_status TEXT NOT NULL,
        //     progress INTEGER NOT NULL
        // )",
        //     )
        //     .unwrap();
    }
}
impl IPersistence for SqlitePersistence {
    fn save_task(&mut self, task: &Task) -> Result<(), String> {
        return Err("开发中 todo!()".to_string());
    }

    fn update_task(&mut self, task: &Task) -> Result<(), String> {
      Err("实现中".to_string())
    }

    fn get_task_by_id(&self, task_id: String) -> Result<Option<Task>, String> {
        Err("实现中".to_string());
    }

    fn get_tasks_by_time(&self) -> Result<Vec<Task>, String> {
        Err("实现中".to_string());
    }

    fn delete_task(&mut self, task_id: String) -> Result<(), String> {
      Err("实现中".to_string())
    }
}
