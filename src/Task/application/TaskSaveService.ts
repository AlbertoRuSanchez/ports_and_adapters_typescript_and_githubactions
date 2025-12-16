import { TaskRepository } from './TaskRepository';
import { TaskSavePort } from './ports/TaskSavePort';

export class TaskSaveService implements TaskSavePort {
  private taskRepository: TaskRepository;
  constructor(injectedTaskSRepository: TaskRepository) {
    this.taskRepository = injectedTaskSRepository;
  }

  async saveTask(task: any): Promise<void> {
    return this.taskRepository.save(task);
  }
}
