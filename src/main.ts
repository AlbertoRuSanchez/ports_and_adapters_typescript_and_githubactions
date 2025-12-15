import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { taskRouter } from './Task/infrastructure/in/TaskExpressRouter';

const app = express();
app.use(taskRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.error(err.stack);
    return res.status(500).json({ message: err.message });
  }
  console.error(err);
  return res.status(500).json({ message: 'Something went wrong' });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
