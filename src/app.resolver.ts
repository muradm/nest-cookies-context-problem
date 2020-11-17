import { Context, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => 'Query')
export class RootResolver {
  @Query(() => Date)
  now(@Context() ctx) {
    ctx.req._cookies = [
      {
        name: 'hello-gql',
        value: 'world-gql',
        options: {},
      },
    ];
    return new Date();
  }
}
