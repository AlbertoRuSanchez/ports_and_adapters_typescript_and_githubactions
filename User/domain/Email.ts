export class Email {
  private value: string;

  constructor(email: string) {
    if (!this.isValidEmail(email)) {
      throw new Error('Email must contain @ and at least one dot');
    }
    this.value = email;
  }

  private isValidEmail(email: string): boolean {
    return email.includes('@') && email.includes('.');
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Email): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
