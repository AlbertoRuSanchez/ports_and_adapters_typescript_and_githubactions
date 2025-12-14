import { TaskRepository } from "./TaskRepository";
export class TaskLoadService {
  private taskLoadRepository: TaskRepository;
  constructor(injectedTaskLoadRepository: TaskRepository) {
    this.taskLoadRepository = injectedTaskLoadRepository;
  }

  async loadAllTasks(): Promise<any[]> {
    return this.taskLoadRepository.loadAllTasks();
  }
}
