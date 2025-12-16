import { Request, Response } from 'express';
import { TaskExpressController } from './TaskExpressController';
import { TaskLoadPort } from '../../application/ports/primary/TaskLoadPort';

describe('TaskExpressController', () => {
  let controller: TaskExpressController;
  let mockTaskLoadService: jest.Mocked<TaskLoadPort>;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    mockTaskLoadService = {
      loadAllTasks: jest.fn(),
    };

    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });

    mockRequest = {};
    mockResponse = {
      status: statusMock,
    } as unknown as Response;

    controller = new TaskExpressController(mockTaskLoadService);
  });

  describe('getAllTasks', () => {
    it('should return 200 and a list of tasks', async () => {
      const mockTasks = [{ id: '1', message: 'Task 1' }];
      mockTaskLoadService.loadAllTasks.mockResolvedValue(mockTasks);

      await controller.getAllTasks(mockRequest as Request, mockResponse as Response);

      expect(mockTaskLoadService.loadAllTasks).toHaveBeenCalledTimes(1);
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(mockTasks);
    });

    it('should handle empty list of tasks', async () => {
      mockTaskLoadService.loadAllTasks.mockResolvedValue([]);

      await controller.getAllTasks(mockRequest as Request, mockResponse as Response);

      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith([]);
    });
  });
});
