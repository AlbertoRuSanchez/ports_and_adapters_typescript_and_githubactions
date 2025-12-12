import { UserId } from '../UserId';

describe('UserId', () => {
  describe('constructor', () => {
    it('should create a UserId with a valid hash string', () => {
      const validHash = 'a1b2c3d4e5f6';
      const userId = new UserId(validHash);
      expect(userId.getValue()).toBe(validHash);
    });

    it('should accept uppercase hex characters', () => {
      const validHash = 'A1B2C3D4E5F6';
      const userId = new UserId(validHash);
      expect(userId.getValue()).toBe(validHash);
    });

    it('should accept mixed case hex characters', () => {
      const validHash = 'A1b2C3d4E5f6';
      const userId = new UserId(validHash);
      expect(userId.getValue()).toBe(validHash);
    });

    it('should throw an error when given an empty string', () => {
      expect(() => new UserId('')).toThrow('UserId must be a valid hash string');
    });

    it('should throw an error when given non-hexadecimal characters', () => {
      expect(() => new UserId('g1h2i3j4')).toThrow('UserId must be a valid hash string');
    });

    it('should throw an error when given special characters', () => {
      expect(() => new UserId('a1-b2-c3-d4')).toThrow('UserId must be a valid hash string');
    });

    it('should throw an error when given spaces', () => {
      expect(() => new UserId('a1 b2 c3')).toThrow('UserId must be a valid hash string');
    });

    it('should accept long hash strings', () => {
      const longHash = 'a'.repeat(64); // SHA256 length
      const userId = new UserId(longHash);
      expect(userId.getValue()).toBe(longHash);
    });

    it('should accept short hash strings', () => {
      const shortHash = '1a2b';
      const userId = new UserId(shortHash);
      expect(userId.getValue()).toBe(shortHash);
    });
  });

  describe('getValue', () => {
    it('should return the hash value', () => {
      const hash = 'abc123def456';
      const userId = new UserId(hash);
      expect(userId.getValue()).toBe(hash);
    });
  });

  describe('equals', () => {
    it('should return true when comparing UserIds with the same value', () => {
      const hash = 'abc123def456';
      const userId1 = new UserId(hash);
      const userId2 = new UserId(hash);
      expect(userId1.equals(userId2)).toBe(true);
    });

    it('should return false when comparing UserIds with different values', () => {
      const userId1 = new UserId('abc123def456');
      const userId2 = new UserId('def456789abc');
      expect(userId1.equals(userId2)).toBe(false);
    });

    it('should return false when comparing UserIds with different cases', () => {
      const userId1 = new UserId('abc123def456');
      const userId2 = new UserId('ABC123DEF456');
      expect(userId1.equals(userId2)).toBe(false);
    });
  });

  describe('toString', () => {
    it('should return the hash value as a string', () => {
      const hash = 'abc123def456';
      const userId = new UserId(hash);
      expect(userId.toString()).toBe(hash);
    });

    it('should allow string concatenation', () => {
      const hash = 'abc123def456';
      const userId = new UserId(hash);
      expect(`User: ${userId}`).toBe(`User: ${hash}`);
    });
  });
});
