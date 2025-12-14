export class Name {
  private value: string;

  constructor(name: string) {
    if (!this.isValidName(name)) {
      throw new Error('Name must be between 3 and 30 characters long');
    }
    this.value = name;
  }

  private isValidName(name: string): boolean {
    return name.length >= 3 && name.length <= 30;
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Name): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
