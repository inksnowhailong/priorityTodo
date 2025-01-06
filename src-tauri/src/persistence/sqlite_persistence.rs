use crate::entities::task::Task;
use crate::tasks::itask_manage::IPersistence;
use serde_json::to_string;
use sqlite::*;

pub struct SqlitePersistence {
    pub db: Connection,
}

impl SqlitePersistence {
    pub fn new() -> Self {
        let db = sqlite::open("tasks.db").unwrap();

        let s = SqlitePersistence { db };
        s.create_tables();
        s
    }

    fn create_tables(&self) {
        self.db
            .execute(
                "CREATE TABLE IF NOT EXISTS tasks (
            id TEXT PRIMARY KEY NOT NULL,
            task_name TEXT NOT NULL,
            description TEXT NOT NULL,
            category TEXT NOT NULL,
            importance INTEGER NOT NULL,
            time_remaining INTEGER ,
            estimated_time INTEGER ,
            task_status TEXT NOT NULL,
            progress INTEGER NOT NULL,
            is_repeat INTEGER NOT NULL,
            repeat_interval TEXT,
            repeat_day INTEGER
        )",
            )
            .unwrap();
    }
}
impl IPersistence for SqlitePersistence {
    fn save_task(&mut self, task: &Task) -> std::result::Result<(), String> {
        let sql = format!(
            "INSERT INTO tasks (id, task_name, description, category, importance, time_remaining, estimated_time, task_status, progress,is_repeat,repeat_interval,repeat_day)
            VALUES ('{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}','{}','{}','{}')",
            task.id.clone().unwrap(),
            task.task_name.clone(),
            task.description.clone(),
            to_string(&task.category).unwrap(),
            task.importance.clone() as u8,
            task.time_remaining,
            task.estimated_time,
            to_string(&task.task_status).unwrap(),
            task.progress,
            task.is_repeat as u8,
            to_string(&task.repeat_interval).unwrap(),
            task.repeat_day.unwrap_or(1),
        );
        self.db.execute(&sql).map_err(|e| {
            println!("sql Error: {}", e.to_string());
            e.to_string()
        })?;
        println!("sql: 储存成功 {:?}", &task.id);
        Ok(())
        // // 执行 SQL 插入，并处理可能的错误
        // match self.db.execute(&sql) {
        //     Ok(_) => Ok(()),
        //     Err(e) => return Err(e),
        // }
    }

    // fn update_task(&mut self, task: &Task) -> Result<(), String> {
    //    todo!();
    // }

    // fn get_task_by_id(&self, task_id: String) -> Result<Option<Task>, String> {
    //    todo!();;
    // }

    // fn get_tasks_by_time(&self) -> Result<Vec<Task>, String> {
    //    todo!();;
    // }

    // fn delete_task(&mut self, task_id: String) -> Result<(), String> {
    //    todo!();
    // }
}
