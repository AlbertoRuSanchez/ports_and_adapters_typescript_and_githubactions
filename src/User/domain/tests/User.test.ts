import { User } from '../User';
import { UserId } from '../UserId';
import { Name } from '../Name';
import { Email } from '../Email';

describe('User', () => {
  it('should create a valid user', () => {
    const userId = new UserId('123');
    const name = new Name('John Doe');
    const email = new Email('john@example.com');

    const user = new User(userId, name, email);

    expect(user).toBeDefined();
    expect(user.id).toBe(userId);
    expect(user.name).toBe(name);
    expect(user.email).toBe(email);
  });
});
