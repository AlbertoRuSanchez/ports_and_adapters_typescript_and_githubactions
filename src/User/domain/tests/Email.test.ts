import { Email } from '../Email';

describe('Email', () => {
  describe('constructor', () => {
    it('should create an Email with a valid email address', () => {
      const validEmail = 'user@example.com';
      const email = new Email(validEmail);
      expect(email.getValue()).toBe(validEmail);
    });

    it('should throw an error when email does not contain @', () => {
      expect(() => new Email('userexample.com')).toThrow(
        'Email must contain @ and at least one dot'
      );
    });

    it('should throw an error when email does not contain a dot', () => {
      expect(() => new Email('user@example')).toThrow('Email must contain @ and at least one dot');
    });

    it('should throw an error when email is empty', () => {
      expect(() => new Email('')).toThrow('Email must contain @ and at least one dot');
    });

    it('should accept emails with multiple dots', () => {
      const validEmail = 'user@mail.example.co.uk';
      const email = new Email(validEmail);
      expect(email.getValue()).toBe(validEmail);
    });
  });

  describe('getValue', () => {
    it('should return the email value', () => {
      const emailStr = 'john@example.com';
      const email = new Email(emailStr);
      expect(email.getValue()).toBe(emailStr);
    });
  });

  describe('equals', () => {
    it('should return true when comparing Emails with the same value', () => {
      const emailStr = 'user@example.com';
      const email1 = new Email(emailStr);
      const email2 = new Email(emailStr);
      expect(email1.equals(email2)).toBe(true);
    });

    it('should return false when comparing Emails with different values', () => {
      const email1 = new Email('user1@example.com');
      const email2 = new Email('user2@example.com');
      expect(email1.equals(email2)).toBe(false);
    });
  });

  describe('toString', () => {
    it('should return the email value as a string', () => {
      const emailStr = 'user@example.com';
      const email = new Email(emailStr);
      expect(email.toString()).toBe(emailStr);
    });

    it('should allow string concatenation', () => {
      const emailStr = 'user@example.com';
      const email = new Email(emailStr);
      expect(`Email: ${email}`).toBe(`Email: ${emailStr}`);
    });
  });
});
