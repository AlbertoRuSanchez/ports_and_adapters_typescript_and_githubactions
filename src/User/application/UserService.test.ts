import { UserService } from './UserService';
import { UserRepositoryPort } from './ports/secondary/UserRepositoryPort';

describe('UserService', () => {
    let userService: UserService;
    let mockUserRepository: jest.Mocked<UserRepositoryPort>;

    beforeEach(() => {
        mockUserRepository = {
            loadAllUsers: jest.fn(),
            saveUser: jest.fn(),
            findUserByUsername: jest.fn(),
        };
        userService = new UserService(mockUserRepository);
    });

    describe('signIn', () => {
        it('should save the user via repository', () => {
            const username = 'testuser';
            const password = 'password123';

            userService.signIn(username, password);

            expect(mockUserRepository.saveUser).toHaveBeenCalledWith(username, password);
            expect(mockUserRepository.saveUser).toHaveBeenCalledTimes(1);
        });
    });

    describe('login', () => {
        it('should return true for valid credentials', () => {
            const result = userService.login('admin', 'pw123');
            expect(result).toBe(true);
        });

        it('should return false for invalid username', () => {
            const result = userService.login('wronguser', 'pw123');
            expect(result).toBe(false);
        });

        it('should return false for invalid password', () => {
            const result = userService.login('admin', 'wrongpass');
            expect(result).toBe(false);
        });
    });
});
