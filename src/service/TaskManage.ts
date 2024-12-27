import { Task } from "@/entities/taskEntities";



/**
 * 任务管理接口
 */
/**
 * 任务管理器抽象类，定义了任务管理的基本操作。
 */
export abstract class TaskManager {
     /**
      * 创建一个新任务。
      * @param task 要创建的任务对象。
      * @returns 返回创建的任务对象的 Promise。
      */
     abstract createTask(task: Task): Promise<Task>;

     /**
      * 修改一个已有的任务。
      * @param task 要修改的任务对象。
      * @returns 返回修改后的任务对象的 Promise。
      */
     abstract modifyTask(task: Task): Promise<Task>;

     /**
      * 根据时间范围查询任务。
      * @param startTime 查询的开始时间（时间戳）。
      * @param endTime 查询的结束时间（时间戳）。
      * @returns 返回任务对象数组的 Promise。
      */
     abstract queryTaskByTime(startTime: number, endTime: number): Promise<Task[]>;

     /**
      * 删除一个任务。
      * @param taskId 要删除的任务的 ID。
      * @returns 返回删除的任务对象的 Promise。
      */
     abstract deleteTask(taskId: string): Promise<Task>;

     /**
      * 完成一个任务。
      * @param taskId 要完成的任务的 ID。
      * @returns 返回完成的任务对象的 Promise。
      */
     abstract completeTask(taskId: string): Promise<Task>;
}
