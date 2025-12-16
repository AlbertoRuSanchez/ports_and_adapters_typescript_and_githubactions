import { UserRepositoryPort } from '../application/ports/UserRepositoryPort';

export class UserPostgresSQLRepository implements UserRepositoryPort {
  private users: Map<string, { username: string; password: string }> = new Map();

  loadAllUsers(): { username: string; password: string }[] {
    return Array.from(this.users.values());
  }

  saveUser(username: string, password: string): void {
    console.log(`Saving user ${username} to PostgreSQL database.`);
  }

  findUserByUsername(username: string): { username: string; password: string } | null {
    console.log(`Finding user ${username} in PostgreSQL database.`);
    return null;
  }
}
