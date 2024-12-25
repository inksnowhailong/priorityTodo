import { Task } from "@/entities/taskEntities";

// 排除 id 字
export interface ITaskManager {
     createTask(task: Task<false>): Promise<Task>;
     modifyTask(task:Task): Promise<Task>;
     queryTaskByTime(startTime:number,endTime:number): Promise<Task[]>;
     deleteTask(taskId:string): Promise<Task>;
     completeTask(taskId:string): Promise<Task>;
}
