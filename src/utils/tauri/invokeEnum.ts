/**
 * @description: 与后端交互的命令枚举
 */
export enum invok_command_enum {
    /**创建 */
    CREATE_TASK = "crate_task",
    /**修改 */
    MODIFY_TASK = "modify_task",
    /**根据时间筛选 */
    QUERY_TASK_BY_TIME = "query_task_by_time",
    /**删除 */
    DELETE_TASK = "delete_task",
    /**完成 */
    COMPLETE_TASK = "complete_task",
}
