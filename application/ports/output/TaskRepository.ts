export interface TaskLoadRepository {
  loadAllTasks(): Promise<any[]>;
}
