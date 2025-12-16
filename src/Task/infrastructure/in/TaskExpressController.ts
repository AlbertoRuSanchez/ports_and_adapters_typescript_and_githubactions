import { Request, Response } from 'express';
import { TaskLoadPort } from '../../application/ports/primary/TaskLoadPort';

export class TaskExpressController {
  private taskLoadService: TaskLoadPort;

  constructor(taskLoadService: TaskLoadPort) {
    this.taskLoadService = taskLoadService;
  }

  async getAllTasks(req: Request, res: Response) {
    const users = await this.taskLoadService.loadAllTasks();
    return res.status(200).json(users);
  }
}
