import { UserPostgresSQLRepository } from './UserPostgresSQLRepository';

describe('UserPostgresSQLRepository', () => {
  let repository: UserPostgresSQLRepository;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    repository = new UserPostgresSQLRepository();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('saveUser', () => {
    it('should log to console', () => {
      repository.saveUser('testuser', 'password');
      expect(consoleSpy).toHaveBeenCalledWith('Saving user testuser to PostgreSQL database.');
    });
  });

  describe('findUserByUsername', () => {
    it('should log and return null', () => {
      const result = repository.findUserByUsername('testuser');
      expect(consoleSpy).toHaveBeenCalledWith('Finding user testuser in PostgreSQL database.');
      expect(result).toBeNull();
    });
  });

  describe('loadAllUsers', () => {
    it('should return empty array', () => {
      const result = repository.loadAllUsers();
      expect(result).toEqual([]);
    });
  });
});
