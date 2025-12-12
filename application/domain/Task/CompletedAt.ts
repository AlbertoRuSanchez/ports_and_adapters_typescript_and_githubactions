export class CompletedAt {
  private value: Date | null;

  constructor(date: Date | null) {
    if (date !== null && !this.isValidDate(date)) {
      throw new Error('CompletedAt must be a valid Date or null');
    }
    this.value = date;
  }

  private isValidDate(date: Date): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }

  getValue(): Date | null {
    return this.value;
  }

  equals(other: CompletedAt): boolean {
    if (this.value === null && other.value === null) {
      return true;
    }
    if (this.value === null || other.value === null) {
      return false;
    }
    return this.value.getTime() === other.value.getTime();
  }

  toString(): string {
    return this.value === null ? 'null' : this.value.toISOString();
  }

  isCompleted(): boolean {
    return this.value !== null;
  }
}
