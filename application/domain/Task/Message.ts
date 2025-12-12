export class Message {
    private value: string;

    constructor(message: string) {
        if (!this.isValidMessage(message)) {
            throw new Error('Message must be between 1 and 500 characters long');
        }
        this.value = message;
    }

    private isValidMessage(message: string): boolean {
        return message.length >= 1 && message.length <= 500;
    }

    getValue(): string {
        return this.value;
    }

    equals(other: Message): boolean {
        return this.value === other.value;
    }

    toString(): string {
        return this.value;
    }
}
