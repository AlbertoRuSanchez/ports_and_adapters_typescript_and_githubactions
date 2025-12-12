import { TaskLoadRepository } from "../application/TaskRepository";

export class TaskPostgresaSQLRepository implements TaskLoadRepository  {
    async loadAllTasks(): Promise<any[]> {  
        return [];
    }
    
}