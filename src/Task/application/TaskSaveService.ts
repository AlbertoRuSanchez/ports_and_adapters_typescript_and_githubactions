import { TaskRepository } from './TaskRepository';

export class TaskSaveService {
  private taskRepository: TaskRepository;
  constructor(injectedTaskSRepository: TaskRepository) {
    this.taskRepository = injectedTaskSRepository;
  }

  async saveTask(task: any): Promise<void> {
    return this.taskRepository.save(task);
  }
}
