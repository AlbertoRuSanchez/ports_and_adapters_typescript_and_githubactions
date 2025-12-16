import { TaskRepositoryPort } from './ports/secondary/TaskRepositoryPort';
import { TaskLoadPort } from './ports/primary/TaskLoadPort';

export class TaskLoadService implements TaskLoadPort {
  private taskLoadRepository: TaskRepositoryPort;
  constructor(injectedTaskLoadRepository: TaskRepositoryPort) {
    this.taskLoadRepository = injectedTaskLoadRepository;
  }

  async loadAllTasks(): Promise<any[]> {
    return this.taskLoadRepository.loadAllTasks();
  }
}
