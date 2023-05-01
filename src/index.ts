import 'reflect-metadata';
import path from 'node:path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';
import { ProductResolver } from './resolvers/ProductResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver, ProductResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    validate: false,
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`server running on port ${url}`);
}

bootstrap();
