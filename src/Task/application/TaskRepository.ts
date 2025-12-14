export interface TaskRepository {
  loadAllTasks(): Promise<any[]>;
  save(task: any): Promise<void>;
}
