import { CreatedAt } from '../CreatedAt';

describe('CreatedAt', () => {
    describe('constructor', () => {
        it('should create a CreatedAt with a valid Date', () => {
            const date = new Date('2025-12-12');
            const createdAt = new CreatedAt(date);
            expect(createdAt.getValue()).toEqual(date);
        });

        it('should throw an error when passed an invalid Date', () => {
            expect(() => new CreatedAt(new Date('invalid'))).toThrow('CreatedAt must be a valid Date');
        });

        it('should throw an error when passed a non-Date object', () => {
            expect(() => new CreatedAt('2025-12-12' as any)).toThrow('CreatedAt must be a valid Date');
        });
    });

    describe('equals', () => {
        it('should return true when comparing CreatedAt with the same timestamp', () => {
            const date = new Date('2025-12-12T10:30:00Z');
            const createdAt1 = new CreatedAt(date);
            const createdAt2 = new CreatedAt(new Date(date.getTime()));
            expect(createdAt1.equals(createdAt2)).toBe(true);
        });

        it('should return false when comparing CreatedAt with different timestamps', () => {
            const createdAt1 = new CreatedAt(new Date('2025-12-12T10:30:00Z'));
            const createdAt2 = new CreatedAt(new Date('2025-12-12T10:31:00Z'));
            expect(createdAt1.equals(createdAt2)).toBe(false);
        });
    });

    describe('toString', () => {
        it('should return the date as ISO string', () => {
            const date = new Date('2025-12-12T10:30:00Z');
            const createdAt = new CreatedAt(date);
            expect(createdAt.toString()).toBe(date.toISOString());
        });
    });
});
