import { Task } from "@/entities/taskEntities";
import { TaskManager } from "../TaskManage";
import { InvokeCommandStrategy, invokeContext } from "@/utils/tauri/invokeFactory";
import { invok_command_enum } from "@/utils/tauri/invokeEnum";

 export class TaskManagerImpl extends TaskManager {
    strategyContext: invokeContext;
    constructor(){
        super();
        this.strategyContext = new invokeContext();
    }
     async createTask(task: Task): Promise<Task> {
         this.strategyContext.setStrategy(new InvokeCommandStrategy(invok_command_enum.CREATE_TASK));
         const res = await this.strategyContext.execute<Task,Task>(task);
         return res
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
