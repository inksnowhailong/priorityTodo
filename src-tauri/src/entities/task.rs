// src/entities/task.rs
use serde::{Serialize, Deserialize};

/// 待办事项结构体
#[derive(Debug, Clone,Serialize, Deserialize, )]
pub struct Task {
    pub id: i32,                  // 待办ID
    pub task_name: String,        // 待办名称
    pub description: String,      // 待办描述
    pub category: TaskCategory,   // 待办分类
    pub importance: String,       // 待办重要性
    pub time_remaining: i32,      // 剩余时间
    pub estimated_time: i32,      // 预计时间
    pub task_status: TaskStatus,  // 待办状态
    pub progress: i32,            // 待办进度
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
        id: i32,
        task_name: String,
        description: String,
        category: TaskCategory,
        importance: String,
        time_remaining: i32,
        estimated_time: i32,
        task_status: TaskStatus,
        progress: i32,
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
}
