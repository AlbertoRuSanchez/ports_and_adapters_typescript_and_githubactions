import { UserId } from './UserId';
import { Email } from './Email';
import { Name } from './Name';

export class User {

    id : UserId;
    name : Name;
    email : Email;

    constructor(id: UserId, name: Name, email: Email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

}