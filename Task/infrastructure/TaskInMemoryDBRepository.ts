import { TaskRepository } from "../application/TaskRepository";

export class TaskInMemoryDBRepository  implements TaskRepository   {

    private tasks: any[] = [];

    async loadAllTasks(): Promise<any[]> {
        return this.tasks;
    }

    async save(task: any): Promise<void> {
        this.tasks.push(task);
        console.log('Task saved in memory.');
    }
    
}