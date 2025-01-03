/**
 * 待办事项类型
 */
export interface Task {
  /**待办ID */
  id?: string;
  /**待办名称 */
  task_name: string;
  /**待办描述 */
  description: string;
  /**待办分类 */
  category: TaskCategory;
  /**待办重要性 */
  importance: TaskImportance;
  /**剩余时间 */
  time_remaining: number;
  /**预计时间 */
  estimated_time: number;
  /**待办状态 */
  task_status: TaskStatus;
  /**待办进度 */
  progress: number;
  is_repeat:boolean;
repeat_interval:RepeatInterval
repeat_end_time:number
}

/**
 * 待办事项分类枚举
 */
export enum TaskCategory {
  /**工作 */
  Work = "Work",
  /**学习 */
  Learning = "Learning",
  /**阅读 */
  Reading = "Reading",
  /**生活 */
  Live = "Live",
  /**其他 */
  Other = "Other",
}

/**
 * 待办事项状态枚举
 */
export enum TaskStatus {
  /**未开始 */
  NotStarted = "NotStarted",
  /**进行中 */
  InProgress = "InProgress",
  /**已完成 */
  Completed = "Completed",
}

/**
 * 重要性
 */
export enum TaskImportance {
  /**低 */
  Low = 0,
  /**中 */
  Medium = 1,
  /**高 */
  High = 2,
  /**紧急 */
  Urgent = 3,
}

enum RepeatInterval {
  Daily,   // 每日重复
  Weekly,  // 每周n（1-7）重复
  Monthly, // 每月重复
  Yearly,  // 每年重复
}
