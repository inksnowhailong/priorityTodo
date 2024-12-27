import { Task } from "@/entities/taskEntities";
import { TaskManager } from "../TaskManage";
import { InvokeCommandStrategy } from "@/utils/tauri/invokeFactory";
class createCommand extends InvokeCommandStrategy<Task,Task> {
    commandKey= "crate_task";

}
 export class TaskManagerImpl extends TaskManager {
     createTask(task: Task): Promise<Task> {
         throw new Error("Method not implemented.");
     }
     modifyTask(task: Task): Promise<Task> {
         throw new Error("Method not implemented.");
     }
     queryTaskByTime(startTime: number, endTime: number): Promise<Task[]> {
         throw new Error("Method not implemented.");
     }
     deleteTask(taskId: string): Promise<Task> {
         throw new Error("Method not implemented.");
     }
     completeTask(taskId: string): Promise<Task> {
         throw new Error("Method not implemented.");
     }

 }
