import { TaskInMemoryDBRepository } from '../TaskInMemoryDBRepository';

describe('TaskInMemoryDBRepository', () => {
  let repository: TaskInMemoryDBRepository;

  beforeEach(() => {
    repository = new TaskInMemoryDBRepository();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('loadAllTasks', () => {
    it('should return initial hardcoded tasks', async () => {
      const tasks = await repository.loadAllTasks();
      expect(tasks.length).toBeGreaterThan(0);
      expect(tasks[0].id).toBe('1');
    });
  });

  describe('save', () => {
    it('should add a new task', async () => {
      const initialTasks = await repository.loadAllTasks();
      const initialCount = initialTasks.length;

      const newTask = {
        id: '999',
        message: 'New Test Task',
        createdAt: new Date(),
        status: 'OPEN',
        completedAt: null,
      };

      await repository.save(newTask);

      const updatedTasks = await repository.loadAllTasks();
      expect(updatedTasks).toHaveLength(initialCount + 1);
      const savedTask = updatedTasks.find((t) => t.id === '999');
      expect(savedTask).toBeDefined();
      expect(savedTask).toEqual(newTask);
    });
  });
});
