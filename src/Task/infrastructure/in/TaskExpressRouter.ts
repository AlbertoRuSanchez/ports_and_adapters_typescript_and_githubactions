import { Router } from "express";
import { TaskExpressController } from "./TaskExpressController";

const taskRouter = Router();
const taskController = new TaskExpressController();

taskRouter.get('/tasks/', (req, res) => taskController.getAllTasks(req, res));

export {taskRouter};