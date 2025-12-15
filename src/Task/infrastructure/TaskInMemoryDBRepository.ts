import { TaskRepository } from '../application/TaskRepository';

export class TaskInMemoryDBRepository implements TaskRepository {
  private tasks: any[] = [
    {
      id: '1',
      message: 'Task 1',
      createdAt: new Date('2025-12-12T10:00:00Z'),
      status: 'OPEN',
      completedAt: null,
    },
    {
      id: '2',
      message: 'Task 2',
      createdAt: new Date('2025-12-12T11:00:00Z'),
      status: 'OPEN',
      completedAt: null,
    },
    {
      id: '3',
      message: 'Task 3',
      createdAt: new Date('2025-12-12T12:00:00Z'),
      status: 'COMPLETED',
      completedAt: new Date('2025-12-12T13:00:00Z'),
    },
  ];

  async loadAllTasks(): Promise<any[]> {
    return this.tasks;
  }

  async save(task: any): Promise<void> {
    this.tasks.push(task);
    console.log('Task saved in memory.');
  }
}
