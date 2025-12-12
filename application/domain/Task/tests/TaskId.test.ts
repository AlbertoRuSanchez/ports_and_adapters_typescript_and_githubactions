import { TaskId } from '../TaskId';

describe('TaskId', () => {
    describe('constructor', () => {
        it('should create a TaskId with a valid hex string', () => {
            const validId = 'abc123def456';
            const taskId = new TaskId(validId);
            expect(taskId.getValue()).toBe(validId);
        });

        it('should throw an error with an invalid hex string', () => {
            expect(() => new TaskId('xyz789uvw000')).toThrow('TaskId must be a valid hexadecimal string');
        });

        it('should throw an error with a string that is too short', () => {
            expect(() => new TaskId('abc123')).toThrow('TaskId must be a valid hexadecimal string');
        });

        it('should throw an error with a string that is too long', () => {
            expect(() => new TaskId('abc123def456abc')).toThrow('TaskId must be a valid hexadecimal string');
        });
    });

    describe('equals', () => {
        it('should return true when comparing TaskIds with the same value', () => {
            const id = 'abc123def456';
            const taskId1 = new TaskId(id);
            const taskId2 = new TaskId(id);
            expect(taskId1.equals(taskId2)).toBe(true);
        });

        it('should return false when comparing TaskIds with different values', () => {
            const taskId1 = new TaskId('abc123def456');
            const taskId2 = new TaskId('def456789abc');
            expect(taskId1.equals(taskId2)).toBe(false);
        });
    });

    describe('toString', () => {
        it('should return the TaskId value as a string', () => {
            const id = 'abc123def456';
            const taskId = new TaskId(id);
            expect(taskId.toString()).toBe(id);
        });
    });
});
