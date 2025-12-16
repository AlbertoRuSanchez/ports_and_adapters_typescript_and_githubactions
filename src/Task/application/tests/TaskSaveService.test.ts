import { TaskSaveService } from '../TaskSaveService';
import { TaskRepositoryPort } from '../ports/secondary/TaskRepositoryPort';

describe('TaskSaveService', () => {
  let taskSaveService: TaskSaveService;
  let mockTaskRepository: jest.Mocked<TaskRepositoryPort>;

  beforeEach(() => {
    mockTaskRepository = {
      loadAllTasks: jest.fn(),
      save: jest.fn(),
    };
    taskSaveService = new TaskSaveService(mockTaskRepository);
  });

  describe('constructor', () => {
    it('should initialize with a TaskRepository', () => {
      expect(taskSaveService).toBeDefined();
    });

    it('should store the injected repository', () => {
      expect(taskSaveService['taskRepository']).toBe(mockTaskRepository);
    });
  });

  describe('saveTask', () => {
    it('should call the repository save method', async () => {
      const mockTask = {
        id: 'abc123',
        message: 'Test task',
        createdAt: new Date(),
        status: 'OPEN',
        completedAt: null,
      };

      mockTaskRepository.save.mockResolvedValue(undefined);

      await taskSaveService.saveTask(mockTask);

      expect(mockTaskRepository.save).toHaveBeenCalledTimes(1);
      expect(mockTaskRepository.save).toHaveBeenCalledWith(mockTask);
    });

    it('should save a task without returning data', async () => {
      const mockTask = {
        id: 'def456',
        message: 'Another task',
        createdAt: new Date(),
        status: 'COMPLETED',
        completedAt: new Date(),
      };

      mockTaskRepository.save.mockResolvedValue(undefined);

      const result = await taskSaveService.saveTask(mockTask);

      expect(result).toBeUndefined();
    });

    it('should handle repository errors when saving', async () => {
      const mockTask = {
        id: 'ghi789',
        message: 'Failing task',
        createdAt: new Date(),
        status: 'OPEN',
        completedAt: null,
      };

      const error = new Error('Database connection failed');
      mockTaskRepository.save.mockRejectedValue(error);

      await expect(taskSaveService.saveTask(mockTask)).rejects.toThrow(
        'Database connection failed'
      );
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

      mockTaskRepository.save.mockResolvedValue(undefined);

      await taskSaveService.saveTask(mockTasks[0]);
      await taskSaveService.saveTask(mockTasks[1]);

      expect(mockTaskRepository.save).toHaveBeenCalledTimes(2);
      expect(mockTaskRepository.save).toHaveBeenNthCalledWith(1, mockTasks[0]);
      expect(mockTaskRepository.save).toHaveBeenNthCalledWith(2, mockTasks[1]);
    });

    it('should save a task with all properties', async () => {
      const mockTask = {
        id: 'jkl012',
        message: 'Complete task',
        createdAt: new Date('2025-12-12T10:00:00Z'),
        status: 'COMPLETED',
        completedAt: new Date('2025-12-12T12:00:00Z'),
      };

      mockTaskRepository.save.mockResolvedValue(undefined);

      await taskSaveService.saveTask(mockTask);

      const callArgs = mockTaskRepository.save.mock.calls[0]![0];
      expect(callArgs.id).toBe('jkl012');
      expect(callArgs.message).toBe('Complete task');
      expect(callArgs.status).toBe('COMPLETED');
    });

    it('should pass task unchanged to the repository', async () => {
      const mockTask = {
        id: 'mno345',
        message: 'Unchanged task',
        createdAt: new Date(),
        status: 'OPEN',
        completedAt: null,
      };

      mockTaskRepository.save.mockResolvedValue(undefined);

      await taskSaveService.saveTask(mockTask);

      expect(mockTaskRepository.save).toHaveBeenCalledWith(mockTask);
    });
  });
});
