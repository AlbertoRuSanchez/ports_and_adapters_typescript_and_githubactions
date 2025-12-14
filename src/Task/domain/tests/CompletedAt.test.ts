import { CompletedAt } from '../CompletedAt';

describe('CompletedAt', () => {
  describe('constructor', () => {
    it('should create a CompletedAt with a valid Date', () => {
      const date = new Date('2025-12-12');
      const completedAt = new CompletedAt(date);
      expect(completedAt.getValue()).toEqual(date);
    });

    it('should create a CompletedAt with null', () => {
      const completedAt = new CompletedAt(null);
      expect(completedAt.getValue()).toBeNull();
    });

    it('should throw an error when passed an invalid Date', () => {
      expect(() => new CompletedAt(new Date('invalid'))).toThrow(
        'CompletedAt must be a valid Date or null'
      );
    });
  });

  describe('equals', () => {
    it('should return true when both are null', () => {
      const completedAt1 = new CompletedAt(null);
      const completedAt2 = new CompletedAt(null);
      expect(completedAt1.equals(completedAt2)).toBe(true);
    });

    it('should return true when comparing with the same timestamp', () => {
      const date = new Date('2025-12-12T10:30:00Z');
      const completedAt1 = new CompletedAt(date);
      const completedAt2 = new CompletedAt(new Date(date.getTime()));
      expect(completedAt1.equals(completedAt2)).toBe(true);
    });

    it('should return false when one is null and the other is not', () => {
      const completedAt1 = new CompletedAt(null);
      const completedAt2 = new CompletedAt(new Date('2025-12-12'));
      expect(completedAt1.equals(completedAt2)).toBe(false);
    });

    it('should return false when comparing different timestamps', () => {
      const completedAt1 = new CompletedAt(new Date('2025-12-12T10:30:00Z'));
      const completedAt2 = new CompletedAt(new Date('2025-12-12T10:31:00Z'));
      expect(completedAt1.equals(completedAt2)).toBe(false);
    });
  });

  describe('isCompleted', () => {
    it('should return true when date is not null', () => {
      const completedAt = new CompletedAt(new Date('2025-12-12'));
      expect(completedAt.isCompleted()).toBe(true);
    });

    it('should return false when date is null', () => {
      const completedAt = new CompletedAt(null);
      expect(completedAt.isCompleted()).toBe(false);
    });
  });

  describe('toString', () => {
    it('should return the date as ISO string when date is set', () => {
      const date = new Date('2025-12-12T10:30:00Z');
      const completedAt = new CompletedAt(date);
      expect(completedAt.toString()).toBe(date.toISOString());
    });

    it('should return "null" when date is null', () => {
      const completedAt = new CompletedAt(null);
      expect(completedAt.toString()).toBe('null');
    });
  });
});
