import { TaskLoadRepository } from "../application/TaskRepository";

export class TaskPostgresSQLRepository implements TaskLoadRepository  {
    async loadAllTasks(): Promise<any[]> {  
        return [];
    }
    
}