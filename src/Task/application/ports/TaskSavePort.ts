export interface TaskSavePort {
    saveTask(task: any): Promise<void>;
}
