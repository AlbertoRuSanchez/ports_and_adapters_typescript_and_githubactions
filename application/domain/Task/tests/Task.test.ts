import { Task } from '../Task';
import { TaskId } from '../TaskId';
import { Message } from '../Message';
import { CreatedAt } from '../CreatedAt';
import { CompletedAt } from '../CompletedAt';
import { TaskStatus } from '../TaskStatus';

describe('Task', () => {
  let taskId: TaskId;
  let message: Message;
  let createdAt: CreatedAt;
  let completedAt: CompletedAt;

  beforeEach(() => {
    taskId = new TaskId('abc123def456');
    message = new Message('Complete project');
    createdAt = new CreatedAt(new Date('2025-12-12T10:00:00Z'));
    completedAt = new CompletedAt(null);
  });

  describe('constructor', () => {
    it('should create a Task with valid properties', () => {
      const task = new Task(taskId, message, createdAt, TaskStatus.Open);
      expect(task.getId()).toEqual(taskId);
      expect(task.getMessage()).toEqual(message);
      expect(task.getCreatedAt()).toEqual(createdAt);
      expect(task.getStatus()).toBe(TaskStatus.Open);
      expect(task.getCompletedAt().getValue()).toBeNull();
    });

    it('should create a Task with all properties including completedAt', () => {
      const completedDate = new Date('2025-12-12T12:00:00Z');
      const completedAtValue = new CompletedAt(completedDate);
      const task = new Task(taskId, message, createdAt, TaskStatus.Completed, completedAtValue);
      expect(task.getStatus()).toBe(TaskStatus.Completed);
      expect(task.getCompletedAt().getValue()).toEqual(completedDate);
    });
  });

  describe('markAsCompleted', () => {
    it('should mark an open task as completed', () => {
      const task = new Task(taskId, message, createdAt, TaskStatus.Open);
      task.markAsCompleted();
      expect(task.isCompleted()).toBe(true);
      expect(task.getCompletedAt().isCompleted()).toBe(true);
    });

    it('should not change a task that is already completed', () => {
      const completedDate = new Date('2025-12-12T11:00:00Z');
      const task = new Task(
        taskId,
        message,
        createdAt,
        TaskStatus.Completed,
        new CompletedAt(completedDate)
      );
      task.markAsCompleted();
      expect(task.getCompletedAt().getValue()).toEqual(completedDate);
    });

    it('should not change a task that is canceled', () => {
      const canceledDate = new Date('2025-12-12T11:00:00Z');
      const task = new Task(
        taskId,
        message,
        createdAt,
        TaskStatus.Canceled,
        new CompletedAt(canceledDate)
      );
      task.markAsCompleted();
      expect(task.isCanceled()).toBe(true);
    });
  });

  describe('markAsCanceled', () => {
    it('should mark an open task as canceled', () => {
      const task = new Task(taskId, message, createdAt, TaskStatus.Open);
      task.markAsCanceled();
      expect(task.isCanceled()).toBe(true);
      expect(task.getCompletedAt().isCompleted()).toBe(true);
    });

    it('should not change a task that is already completed', () => {
      const completedDate = new Date('2025-12-12T11:00:00Z');
      const task = new Task(
        taskId,
        message,
        createdAt,
        TaskStatus.Completed,
        new CompletedAt(completedDate)
      );
      task.markAsCanceled();
      expect(task.isCompleted()).toBe(true);
    });

    it('should not change a task that is already canceled', () => {
      const canceledDate = new Date('2025-12-12T11:00:00Z');
      const task = new Task(
        taskId,
        message,
        createdAt,
        TaskStatus.Canceled,
        new CompletedAt(canceledDate)
      );
      task.markAsCanceled();
      expect(task.isCanceled()).toBe(true);
    });
  });

  describe('status checks', () => {
    it('should return true for isOpen when status is Open', () => {
      const task = new Task(taskId, message, createdAt, TaskStatus.Open);
      expect(task.isOpen()).toBe(true);
      expect(task.isCompleted()).toBe(false);
      expect(task.isCanceled()).toBe(false);
    });

    it('should return true for isCompleted when status is Completed', () => {
      const task = new Task(taskId, message, createdAt, TaskStatus.Completed);
      expect(task.isOpen()).toBe(false);
      expect(task.isCompleted()).toBe(true);
      expect(task.isCanceled()).toBe(false);
    });

    it('should return true for isCanceled when status is Canceled', () => {
      const task = new Task(taskId, message, createdAt, TaskStatus.Canceled);
      expect(task.isOpen()).toBe(false);
      expect(task.isCompleted()).toBe(false);
      expect(task.isCanceled()).toBe(true);
    });
  });
});
