export class TaskId {
    private value: string;

    constructor(id: string) {
        if (!this.isValidId(id)) {
            throw new Error('TaskId must be a valid hexadecimal string');
        }
        this.value = id;
    }

    private isValidId(id: string): boolean {
        return /^[a-f0-9]{12}$/.test(id);
    }

    getValue(): string {
        return this.value;
    }

    equals(other: TaskId): boolean {
        return this.value === other.value;
    }

    toString(): string {
        return this.value;
    }
}
