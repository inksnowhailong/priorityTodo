// src/entities/task.rs
use serde::{Serialize, Deserialize};
use uuid::Uuid;
/// 待办事项结构体
#[derive(Debug, Clone,Serialize, Deserialize, )]
pub struct Task {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,          // 待办ID
    pub task_name: String,        // 待办名称
    pub description: String,      // 待办描述
    pub category: TaskCategory,   // 待办分类
    pub importance: u8,  // 待办重要性 0-3  0: 低 1: 中 2: 高 3: 紧急
    pub time_remaining: u64,      // 剩余时间
    pub estimated_time: u64,      // 预计时间
    pub task_status: TaskStatus,  // 待办状态
    pub progress: u8,            // 待办进度
}

/// 待办事项分类枚举
#[derive(Debug, Clone,Serialize, Deserialize )]
pub enum TaskCategory {
    Work,        // 工作
    Learning,    // 学习
    Reading,     // 阅读
    Live,        // 生活
    Other,       // 其他
}

/// 待办事项状态枚举
#[derive(Debug, Clone,Serialize, Deserialize)]
pub enum TaskStatus {
    NotStarted,  // 未开始
    InProgress,  // 进行中
    Completed,   // 已完成
}
impl Task {
    /// 创建一个新的 Task 实例
    pub fn new(
        id: Option<String>,
        task_name: String,
        description: String,
        category: TaskCategory,
        importance: u8,
        time_remaining: u64,
        estimated_time: u64,
        task_status: TaskStatus,
        progress: u8,
    ) -> Self {
        Task {
            id,
            task_name,
            description,
            category,
            importance,
            time_remaining,
            estimated_time,
            task_status,
            progress,
        }
    }

    pub fn get_id() -> String  {
     return Uuid::new_v4().to_string();
    }
}
