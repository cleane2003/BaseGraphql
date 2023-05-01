import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { CreateUserInput } from '../dtos/inputs/CreateUserInput';
import { User } from '../dtos/models/UserModel';

const users: User[] = [];

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  async users() {
    return users;
  }

  @Mutation(() => User)
  async createUser(@Arg('Data') data: CreateUserInput) {
    const user = {
      name: data.name,
      email: data.email,
    };

    users.push(user);

    return user;
  }
}
