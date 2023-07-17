import { buildSchemaSync, Resolver, Query } from 'type-graphql';

@Resolver()
class HelloTestResolver {
  @Query(() => String)
  hello() {
    return 'Hello Test!';
  }
}

export const schema = buildSchemaSync({
  resolvers: [HelloTestResolver],
  emitSchemaFile: process.env.NODE_ENV === 'development',
});
