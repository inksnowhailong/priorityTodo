
  // 待办事项类型
  export interface Task {
    id?:string;                  // 待办ID
    task_name: string;        // 待办名称
    description: string;      // 待办描述
    category: TaskCategory;   // 待办分类
    importance: TaskImportance;       // 待办重要性
    time_remaining: number;      // 剩余时间
    estimated_time: number;      // 预计时间
    task_status: TaskStatus;  // 待办状态
    progress: number;            // 待办进度
  }


  // 待办事项分类枚举
export enum TaskCategory {
  Work = "Work",        // 工作
  Learning = "Learning",    // 学习
  Reading = "Reading",     // 阅读
  Live = "Live",        // 生活
  Other = "Other",       // 其他
}

// 待办事项状态枚举
export enum TaskStatus {
  NotStarted = "NotStarted",  // 未开始
  InProgress = "InProgress",  // 进行中
  Completed = "Completed",   // 已完成
}

// 重要性
export enum TaskImportance {
  Low = 0,        // 低
  Medium = 1,     // 中
  High = 2,       // 高
  Urgent = 3,     // 紧急
}
