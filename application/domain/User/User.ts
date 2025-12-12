import { UserId } from './UserId';
import { Email } from './Email';

export class User {

    id : UserId;
    name : string;
    email : Email;

    constructor(id: UserId, name: string, email: Email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

}