import { UserService } from '../../User/application/UserService';
import { TaskLoadService } from '../../Task/application/TaskLoadService';

import { UserInMemoryDBRepository } from '../../User/infrastructure/UserInMemoryDBRepository';
import { TaskSaveService } from '../../Task/application/TaskSaveService';
import { TaskInMemoryDBRepository } from '../../Task/infrastructure/TaskInMemoryDBRepository';

const userRepository = new UserInMemoryDBRepository();
const taskRepository = new TaskInMemoryDBRepository();

export const ServiceContainer = {
  user: {
    userService: new UserService(userRepository),
  },
  task: {
    taskLoadService: new TaskLoadService(taskRepository),
    taskSaveService: new TaskSaveService(taskRepository),
  },
};
