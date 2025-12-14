import { UserService } from "../../User/application/UserService";
import { TaskLoadService } from "../../Task/application/TaskLoadService";

import { UserInMemoryDBRepository } from "../../User/infrastructure/UserInMemoryDBRepository";
import { TaskPostgresSQLRepository } from "../../Task/infrastructure/TaskPostgresSQLRepository";


const userRepository = new UserInMemoryDBRepository();
const taskRepository = new TaskPostgresSQLRepository();

export const ServiceContainer = {

    user : {
        userService: new UserService(userRepository),
    },
    task: {
        taskLoadService: new TaskLoadService(taskRepository),
    },

}