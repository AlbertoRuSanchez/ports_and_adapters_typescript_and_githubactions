import { Router } from 'express';
import { TaskExpressController } from './primary/TaskExpressController';
import { ServiceContainer } from '../../Shared/infrastructure/ServiceContainer';

const taskRouter = Router();
const taskController = new TaskExpressController(ServiceContainer.task.taskLoadService);

taskRouter.get('/tasks/', (req, res) => taskController.getAllTasks(req, res));

export { taskRouter };
