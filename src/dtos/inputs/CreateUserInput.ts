import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
