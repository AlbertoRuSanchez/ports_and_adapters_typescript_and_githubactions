import { UserRepositoryPort } from './ports/UserRepositoryPort';

export class UserService {
  private userRepository: UserRepositoryPort;

  constructor(injectedUserRepository: UserRepositoryPort) {
    this.userRepository = injectedUserRepository;
  }

  signIn(username: string, password: string): void {
    this.userRepository.saveUser(username, password);
  }

  login(username: string, password: string): boolean {
    return username === 'admin' && password === 'pw123';
  }
}
