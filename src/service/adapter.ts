import { TaskCategory, TaskImportance, TaskStatus } from "@/entities/taskEntities";

/**
 * 待办事项分类枚举映射文本
 */
export const categoryMap: Record<TaskCategory, string> = {
    Work: "工作",
    Learning: "学习",
    Reading: "阅读",
    Live: "生活",
    Other: "其他",
  };

/**
 * 重要性映射文本
 */
export const TaskImportanceMap: Record<TaskImportance, string> = {
    0: "低",
    1: "中",
    2: "高",
    3: "紧急",
};
/**
 * 待办事项状态映射文本
 */
export const TaskStatusMap: Record<TaskStatus, string> = {
    NotStarted: "未开始",
    InProgress: "进行中",
    Completed: "已完成",
};