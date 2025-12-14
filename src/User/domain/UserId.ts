export class UserId {
  private readonly value: string;

  constructor(value: string) {
    if (!this.isValidHash(value)) {
      throw new Error('UserId must be a valid hash string');
    }
    this.value = value;
  }

  private isValidHash(value: string): boolean {
    // Validates hexadecimal hash format (common for MD5, SHA1, SHA256, etc.)
    const hashPattern = /^[a-f0-9]+$/i;
    return hashPattern.test(value) && value.length > 0;
  }

  getValue(): string {
    return this.value;
  }

  equals(other: UserId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
