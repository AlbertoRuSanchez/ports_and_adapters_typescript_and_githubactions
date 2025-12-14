import { Request, Response } from 'express';
import { ServiceContainer } from '../../Shared/infrastructure/ServiceContainer';

export class TaskExpressController {
    
    async getAllTasks(req: Request, res: Response){
        const users = await ServiceContainer.task.taskLoadService.loadAllTasks();
        return res.json(users).status(200);
    }

}