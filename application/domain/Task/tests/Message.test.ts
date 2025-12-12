import { Message } from '../Message';

describe('Message', () => {
  describe('constructor', () => {
    it('should create a Message with valid length', () => {
      const validMessage = 'This is a task message';
      const message = new Message(validMessage);
      expect(message.getValue()).toBe(validMessage);
    });

    it('should throw an error when message is empty', () => {
      expect(() => new Message('')).toThrow('Message must be between 1 and 500 characters long');
    });

    it('should throw an error when message is too long', () => {
      const longMessage = 'A'.repeat(501);
      expect(() => new Message(longMessage)).toThrow(
        'Message must be between 1 and 500 characters long'
      );
    });

    it('should accept a single character message', () => {
      const message = new Message('A');
      expect(message.getValue()).toBe('A');
    });

    it('should accept a 500 character message', () => {
      const longMessage = 'A'.repeat(500);
      const message = new Message(longMessage);
      expect(message.getValue()).toBe(longMessage);
    });
  });

  describe('equals', () => {
    it('should return true when comparing Messages with the same value', () => {
      const text = 'Test message';
      const message1 = new Message(text);
      const message2 = new Message(text);
      expect(message1.equals(message2)).toBe(true);
    });

    it('should return false when comparing Messages with different values', () => {
      const message1 = new Message('Message one');
      const message2 = new Message('Message two');
      expect(message1.equals(message2)).toBe(false);
    });
  });

  describe('toString', () => {
    it('should return the message value as a string', () => {
      const text = 'Task description';
      const message = new Message(text);
      expect(message.toString()).toBe(text);
    });
  });
});
