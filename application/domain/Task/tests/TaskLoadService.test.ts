import { TaskLoadService } from '../TaskLoadService';
import { TaskLoadRepository } from '../../../ports/output/TaskRepository';
import { Task } from '../Task';
import { TaskId } from '../TaskId';
import { Message } from '../Message';
import { CreatedAt } from '../CreatedAt';
import { CompletedAt } from '../CompletedAt';
import { TaskStatus } from '../TaskStatus';

describe('TaskLoadService', () => {
    let taskLoadService: TaskLoadService;
    let mockTaskLoadRepository: jest.Mocked<TaskLoadRepository>;

    beforeEach(() => {
        mockTaskLoadRepository = {
            loadAllTasks: jest.fn()
        };
        taskLoadService = new TaskLoadService(mockTaskLoadRepository);
    });

    describe('constructor', () => {
        it('should initialize with a TaskLoadRepository', () => {
            expect(taskLoadService).toBeDefined();
        });

        it('should store the injected repository', () => {
            expect(taskLoadService['taskLoadRepository']).toBe(mockTaskLoadRepository);
        });
    });

    describe('loadAllTasks', () => {
        it('should call the repository loadAllTasks method', async () => {
            mockTaskLoadRepository.loadAllTasks.mockResolvedValue([]);

            await taskLoadService.loadAllTasks();

            expect(mockTaskLoadRepository.loadAllTasks).toHaveBeenCalledTimes(1);
        });

        it('should return an empty array when no tasks exist', async () => {
            mockTaskLoadRepository.loadAllTasks.mockResolvedValue([]);

            const result = await taskLoadService.loadAllTasks();

            expect(result).toEqual([]);
            expect(Array.isArray(result)).toBe(true);
        });

        it('should return tasks from the repository', async () => {
            const mockTasks = [
                {
                    id: 'abc123def456',
                    message: 'Task 1',
                    createdAt: new Date('2025-12-12T10:00:00Z'),
                    status: 'OPEN',
                    completedAt: null
                },
                {
                    id: 'def456789abc',
                    message: 'Task 2',
                    createdAt: new Date('2025-12-12T11:00:00Z'),
                    status: 'COMPLETED',
                    completedAt: new Date('2025-12-12T12:00:00Z')
                }
            ];

            mockTaskLoadRepository.loadAllTasks.mockResolvedValue(mockTasks);

            const result = await taskLoadService.loadAllTasks();

            expect(result).toEqual(mockTasks);
            expect(result).toHaveLength(2);
        });

        it('should return multiple tasks', async () => {
            const mockTasks = Array.from({ length: 5 }, (_, i) => ({
                id: `id${i}`,
                message: `Task ${i + 1}`,
                createdAt: new Date(),
                status: 'OPEN',
                completedAt: null
            }));

            mockTaskLoadRepository.loadAllTasks.mockResolvedValue(mockTasks);

            const result = await taskLoadService.loadAllTasks();

            expect(result).toHaveLength(5);
            expect(mockTaskLoadRepository.loadAllTasks).toHaveBeenCalledTimes(1);
        });

        it('should handle repository errors', async () => {
            const error = new Error('Database connection failed');
            mockTaskLoadRepository.loadAllTasks.mockRejectedValue(error);

            await expect(taskLoadService.loadAllTasks()).rejects.toThrow('Database connection failed');
        });

        it('should return data in the order provided by the repository', async () => {
            const mockTasks = [
                { id: '1', message: 'First', createdAt: new Date(), status: 'OPEN', completedAt: null },
                { id: '2', message: 'Second', createdAt: new Date(), status: 'OPEN', completedAt: null },
                { id: '3', message: 'Third', createdAt: new Date(), status: 'OPEN', completedAt: null }
            ];

            mockTaskLoadRepository.loadAllTasks.mockResolvedValue(mockTasks);

            const result = await taskLoadService.loadAllTasks();

            expect(result[0].id).toBe('1');
            expect(result[1].id).toBe('2');
            expect(result[2].id).toBe('3');
        });

        it('should handle tasks with different statuses', async () => {
            const mockTasks = [
                { id: '1', message: 'Open task', createdAt: new Date(), status: 'OPEN', completedAt: null },
                { id: '2', message: 'Completed task', createdAt: new Date(), status: 'COMPLETED', completedAt: new Date() },
                { id: '3', message: 'Canceled task', createdAt: new Date(), status: 'CANCELED', completedAt: new Date() }
            ];

            mockTaskLoadRepository.loadAllTasks.mockResolvedValue(mockTasks);

            const result = await taskLoadService.loadAllTasks();

            expect(result).toHaveLength(3);
            expect(result[0].status).toBe('OPEN');
            expect(result[1].status).toBe('COMPLETED');
            expect(result[2].status).toBe('CANCELED');
        });

        it('should not modify the data returned from the repository', async () => {
            const mockTasks = [
                {
                    id: 'abc123def456',
                    message: 'Original task',
                    createdAt: new Date('2025-12-12T10:00:00Z'),
                    status: 'OPEN',
                    completedAt: null
                }
            ];

            mockTaskLoadRepository.loadAllTasks.mockResolvedValue(mockTasks);

            const result = await taskLoadService.loadAllTasks();

            expect(result[0]).toEqual(mockTasks[0]);
            expect(result[0].message).toBe('Original task');
        });
    });
});
