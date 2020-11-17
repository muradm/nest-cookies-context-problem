import { Query, Resolver } from '@nestjs/graphql';

@Resolver(() => 'Query')
export class RootResolver {
  @Query(() => Date)
  now() {
    return new Date();
  }
}
