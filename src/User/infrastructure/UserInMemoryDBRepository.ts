import { UserRepository } from "../application/UserRepository";

export class UserInMemoryDBRepository implements UserRepository {
    private users: { username: string; password: string }[] = [];

    loadAllUsers(): { username: string; password: string; }[] {
        return this.users;
    }

    saveUser(username: string, password: string): void {
        this.users.push({ username, password });
        console.log(`User ${username} saved in memory.`);
    }

    findUserByUsername(username: string): { username: string; password: string } | null {
        const user = this.users.find(user => user.username === username);
        return user || null;
    }
}