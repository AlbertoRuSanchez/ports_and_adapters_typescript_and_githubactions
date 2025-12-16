export interface UserRepositoryPort {
  loadAllUsers(): { username: string; password: string }[];
  saveUser(username: string, password: string): void;
  findUserByUsername(username: string): { username: string; password: string } | null;
}
