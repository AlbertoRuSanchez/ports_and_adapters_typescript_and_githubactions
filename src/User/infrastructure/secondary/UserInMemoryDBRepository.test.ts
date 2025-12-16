import { UserInMemoryDBRepository } from './UserInMemoryDBRepository';

describe('UserInMemoryDBRepository', () => {
    let repository: UserInMemoryDBRepository;

    beforeEach(() => {
        repository = new UserInMemoryDBRepository();
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });

    describe('saveUser', () => {
        it('should save a user', () => {
            repository.saveUser('testuser', 'password');
            const users = repository.loadAllUsers();
            expect(users).toHaveLength(1);
            expect(users[0]).toEqual({ username: 'testuser', password: 'password' });
        });

        it('should save multiple users', () => {
            repository.saveUser('user1', 'pass1');
            repository.saveUser('user2', 'pass2');
            const users = repository.loadAllUsers();
            expect(users).toHaveLength(2);
        });
    });

    describe('findUserByUsername', () => {
        it('should return a user if found', () => {
            repository.saveUser('testuser', 'password');
            const user = repository.findUserByUsername('testuser');
            expect(user).toBeDefined();
            expect(user?.username).toBe('testuser');
        });

        it('should return null if user not found', () => {
            const user = repository.findUserByUsername('nonexistent');
            expect(user).toBeNull();
        });
    });

    describe('loadAllUsers', () => {
        it('should return empty array initially', () => {
            expect(repository.loadAllUsers()).toEqual([]);
        });
    });
});
