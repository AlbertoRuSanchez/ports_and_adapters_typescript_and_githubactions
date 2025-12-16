export interface TaskRepositoryPort {
  loadAllTasks(): Promise<any[]>;
  save(task: any): Promise<void>;
}
