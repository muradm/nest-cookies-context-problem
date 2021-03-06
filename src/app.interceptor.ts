import { Injectable, ExecutionContext } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { CookiesInterceptor } from 'nest-cookies';

/**
 * As per example Graphql context only interceptor
 */
// @Injectable()
// export class AppCookieInterceptor extends CookiesInterceptor {
//   getRequestResponse(context: ExecutionContext) {
//     const gql = GqlExecutionContext.create(context);
//     return {
//       req: gql.getContext().req,
//       res: gql.getContext().res,
//     };
//   }
// }

/**
 * Hybrid interceptor
 */
@Injectable()
export class AppCookieInterceptor extends CookiesInterceptor {
  getRequestResponse(context: ExecutionContext) {
    if (context.getType() === 'http') {
      const http = context.switchToHttp();
      return { req: http.getRequest(), res: http.getResponse() };
    }

    if (context.getType<GqlContextType>() === 'graphql') {
      const gql = GqlExecutionContext.create(context);
      return { req: gql.getContext().req, res: gql.getContext().res };
    }

    throw new Error('Unsupported context type ' + context.getType());
  }
}
