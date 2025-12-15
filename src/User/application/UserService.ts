import { UserRepository } from './UserRepository';

export class UserService {
  private userRepository: UserRepository;

  constructor(injectedUserRepository: UserRepository) {
    this.userRepository = injectedUserRepository;
  }

  signIn(username: string, password: string): void {
    this.userRepository.saveUser(username, password);
  }

  login(username: string, password: string): boolean {
    return username === 'admin' && password === 'pw123';
  }
}
