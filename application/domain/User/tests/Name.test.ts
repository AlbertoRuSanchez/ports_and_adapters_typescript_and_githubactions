import { Name } from '../Name';

describe('Name', () => {
    describe('constructor', () => {
        it('should create a Name with valid length', () => {
            const validName = 'JohnDoe';
            const name = new Name(validName);
            expect(name.getValue()).toBe(validName);
        });

        it('should throw an error when name is too short', () => {
            expect(() => new Name('Jo')).toThrow('Name must be between 3 and 30 characters long');
        });

        it('should throw an error when name is too long', () => {
            const longName = 'J'.repeat(31);
            expect(() => new Name(longName)).toThrow('Name must be between 3 and 30 characters long');
        });
    });

    describe('getValue', () => {
        it('should return the name value', () => {
            const nameStr = 'Alice';
            const name = new Name(nameStr);
            expect(name.getValue()).toBe(nameStr);
        });
    });

    describe('equals', () => {
        it('should return true when comparing Names with the same value', () => {
            const nameStr = 'Charlie';
            const name1 = new Name(nameStr);
            const name2 = new Name(nameStr);
            expect(name1.equals(name2)).toBe(true);
        });

        it('should return false when comparing Names with different values', () => {
            const name1 = new Name('Dave');
            const name2 = new Name('Eve');
            expect(name1.equals(name2)).toBe(false);
        });
    });

    describe('toString', () => {
        it('should return the name value as a string', () => {
            const nameStr = 'Frank';
            const name = new Name(nameStr);
            expect(name.toString()).toBe(nameStr);
        });

        it('should allow string concatenation', () => {
            const nameStr = 'Grace';
            const name = new Name(nameStr);
            const greeting = 'Hello, ' + name;
            expect(greeting).toBe('Hello, Grace');
        });
    });
});
