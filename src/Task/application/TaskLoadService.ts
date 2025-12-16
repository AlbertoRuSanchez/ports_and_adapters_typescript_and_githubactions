import { TaskRepository } from './TaskRepository';
import { TaskLoadPort } from './ports/TaskLoadPort';

export class TaskLoadService implements TaskLoadPort {
  private taskLoadRepository: TaskRepository;
  constructor(injectedTaskLoadRepository: TaskRepository) {
    this.taskLoadRepository = injectedTaskLoadRepository;
  }

  async loadAllTasks(): Promise<any[]> {
    return this.taskLoadRepository.loadAllTasks();
  }
}
