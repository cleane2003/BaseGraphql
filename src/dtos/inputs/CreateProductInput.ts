import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateProductInput {
  @Field()
  id: string;

  @Field()
  name: string;
}
