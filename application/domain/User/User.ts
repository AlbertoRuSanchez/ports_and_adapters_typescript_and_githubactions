import { UserId } from './UserId';

export class User {

    id : UserId;
    name : string;
    email : string;

    constructor(id: UserId, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

}