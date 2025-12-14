import { TaskPostgresSQLRepository } from './TaskPostgresSQLRepository';

describe('TaskPostgresSQLRepository', () => {
  let repository: TaskPostgresSQLRepository;

  beforeEach(() => {
    repository = new TaskPostgresSQLRepository();
  });

  describe('constructor', () => {
    it('should initialize the repository', () => {
      expect(repository).toBeDefined();
    });

    it('should be an instance of TaskPostgresSQLRepository', () => {
      expect(repository).toBeInstanceOf(TaskPostgresSQLRepository);
    });
  });

  describe('loadAllTasks', () => {
    it('should return an array of tasks', async () => {
      const result = await repository.loadAllTasks();

      expect(Array.isArray(result)).toBe(true);
    });

    it('should return an empty array when no tasks exist', async () => {
      const result = await repository.loadAllTasks();

      expect(result).toEqual([]);
    });

    it('should be an async function', () => {
      const result = repository.loadAllTasks();

      expect(result).toBeInstanceOf(Promise);
    });

    it('should resolve without errors', async () => {
      await expect(repository.loadAllTasks()).resolves.toBeDefined();
    });
  });

  describe('save', () => {
    it('should save a task', async () => {
      const mockTask = {
        id: 'abc123',
        message: 'Test task',
        createdAt: new Date(),
        status: 'OPEN',
        completedAt: null,
      };

      await expect(repository.save(mockTask)).resolves.toBeUndefined();
    });

    it('should accept any task object', async () => {
      const mockTask = {
        id: '123',
        message: 'Any task',
        createdAt: new Date(),
        status: 'COMPLETED',
        completedAt: new Date(),
      };

      await expect(repository.save(mockTask)).resolves.not.toThrow();
    });

    it('should be an async function', () => {
      const mockTask = {
        id: 'def456',
        message: 'Test',
        createdAt: new Date(),
        status: 'OPEN',
        completedAt: null,
      };

      const result = repository.save(mockTask);

      expect(result).toBeInstanceOf(Promise);
    });

    it('should handle task with all properties', async () => {
      const mockTask = {
        id: 'ghi789',
        message: 'Complete task',
        createdAt: new Date('2025-12-12T10:00:00Z'),
        status: 'COMPLETED',
        completedAt: new Date('2025-12-12T12:00:00Z'),
      };

      await expect(repository.save(mockTask)).resolves.toBeUndefined();
    });

    it('should save multiple tasks sequentially', async () => {
      const mockTasks = [
        {
          id: '1',
          message: 'Task 1',
          createdAt: new Date(),
          status: 'OPEN',
          completedAt: null,
        },
        {
          id: '2',
          message: 'Task 2',
          createdAt: new Date(),
          status: 'OPEN',
          completedAt: null,
        },
      ];

      await expect(repository.save(mockTasks[0])).resolves.toBeUndefined();
      await expect(repository.save(mockTasks[1])).resolves.toBeUndefined();
    });

    it('should resolve without returning data', async () => {
      const mockTask = {
        id: 'jkl012',
        message: 'No return task',
        createdAt: new Date(),
        status: 'OPEN',
        completedAt: null,
      };

      const result = await repository.save(mockTask);

      expect(result).toBeUndefined();
    });
  });

  describe('Interface compliance', () => {
    it('should implement TaskRepository interface with loadAllTasks method', () => {
      expect(typeof repository.loadAllTasks).toBe('function');
    });

    it('should implement TaskRepository interface with save method', () => {
      expect(typeof repository.save).toBe('function');
    });
  });
});
