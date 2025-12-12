import { TaskLoadRepository } from "../../ports/output/TaskRepository";

export class TaskLoadService { 

private taskLoadRepository: TaskLoadRepository;
constructor(injectedTaskLoadRepository : TaskLoadRepository) {
    this.taskLoadRepository = injectedTaskLoadRepository;
}

    async loadAllTasks(): Promise<any[]> {
        return this.taskLoadRepository.loadAllTasks();
    }

}