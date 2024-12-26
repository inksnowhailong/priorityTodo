import { Task } from "@/entities/taskEntities";

/**
 * 任务管理接口
 */
export abstract class TaskManager {
     abstract createTask(task: Task): Promise<Task>;
     abstract modifyTask(task: Task): Promise<Task>;
     abstract queryTaskByTime(startTime: number, endTime: number): Promise<Task[]>;
     abstract deleteTask(taskId: string): Promise<Task>;
     abstract completeTask(taskId: string): Promise<Task>;
}
