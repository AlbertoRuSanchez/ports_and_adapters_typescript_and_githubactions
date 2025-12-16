import { TaskRepositoryPort } from './ports/TaskRepositoryPort';
import { TaskLoadPort } from './ports/TaskLoadPort';

export class TaskLoadService implements TaskLoadPort {
  private taskLoadRepository: TaskRepositoryPort;
  constructor(injectedTaskLoadRepository: TaskRepositoryPort) {
    this.taskLoadRepository = injectedTaskLoadRepository;
  }

  async loadAllTasks(): Promise<any[]> {
    return this.taskLoadRepository.loadAllTasks();
  }
}
