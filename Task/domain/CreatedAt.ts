export class CreatedAt {
  private value: Date;

  constructor(date: Date) {
    if (!this.isValidDate(date)) {
      throw new Error('CreatedAt must be a valid Date');
    }
    this.value = date;
  }

  private isValidDate(date: Date): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }

  getValue(): Date {
    return this.value;
  }

  equals(other: CreatedAt): boolean {
    return this.value.getTime() === other.value.getTime();
  }

  toString(): string {
    return this.value.toISOString();
  }
}
