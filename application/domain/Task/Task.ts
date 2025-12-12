import { TaskId } from './TaskId';
import { Message } from './Message';
import { CreatedAt } from './CreatedAt';
import { CompletedAt } from './CompletedAt';
import { TaskStatus } from './TaskStatus';

export class Task {
    id: TaskId;
    message: Message;
    createdAt: CreatedAt;
    completedAt: CompletedAt;
    status: TaskStatus;

    constructor(
        id: TaskId,
        message: Message,
        createdAt: CreatedAt,
        status: TaskStatus,
        completedAt: CompletedAt = new CompletedAt(null)
    ) {
        this.id = id;
        this.message = message;
        this.createdAt = createdAt;
        this.status = status;
        this.completedAt = completedAt;
    }

    getId(): TaskId {
        return this.id;
    }

    getMessage(): Message {
        return this.message;
    }

    getCreatedAt(): CreatedAt {
        return this.createdAt;
    }

    getCompletedAt(): CompletedAt {
        return this.completedAt;
    }

    getStatus(): TaskStatus {
        return this.status;
    }

    markAsCompleted(): void {
        if (this.status === TaskStatus.Open) {
            this.status = TaskStatus.Completed;
            this.completedAt = new CompletedAt(new Date());
        }
    }

    markAsCanceled(): void {
        if (this.status === TaskStatus.Open) {
            this.status = TaskStatus.Canceled;
            this.completedAt = new CompletedAt(new Date());
        }
    }

    isOpen(): boolean {
        return this.status === TaskStatus.Open;
    }

    isCompleted(): boolean {
        return this.status === TaskStatus.Completed;
    }

    isCanceled(): boolean {
        return this.status === TaskStatus.Canceled;
    }
}
