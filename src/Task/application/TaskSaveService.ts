import { TaskRepositoryPort } from './ports/TaskRepositoryPort';
import { TaskSavePort } from './ports/TaskSavePort';

export class TaskSaveService implements TaskSavePort {
  private taskRepository: TaskRepositoryPort;
  constructor(injectedTaskSRepository: TaskRepositoryPort) {
    this.taskRepository = injectedTaskSRepository;
  }

  async saveTask(task: any): Promise<void> {
    return this.taskRepository.save(task);
  }
}
