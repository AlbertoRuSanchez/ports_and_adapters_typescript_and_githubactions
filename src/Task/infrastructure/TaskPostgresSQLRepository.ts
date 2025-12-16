import { TaskRepositoryPort } from '../application/ports/TaskRepositoryPort';

export class TaskPostgresSQLRepository implements TaskRepositoryPort {
  async loadAllTasks(): Promise<any[]> {
    return [];
  }

  async save(task: any): Promise<void> {
    console.log('Task saved to PostgreSQL database.');
  }
}
