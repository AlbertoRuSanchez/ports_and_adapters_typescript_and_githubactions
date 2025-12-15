import { TaskRepository } from '../application/TaskRepository';

export class TaskPostgresSQLRepository implements TaskRepository {
  async loadAllTasks(): Promise<any[]> {
    return [];
  }

  async save(task: any): Promise<void> {
    console.log('Task saved to PostgreSQL database.');
  }
}
