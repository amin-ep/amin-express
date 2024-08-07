import extractQueryParams from './extractQuery';
import { IRequest } from './interfaces/IRequest';
import { IResponse } from './interfaces/IResponse';
import { Request } from './Request';
import { Middleware } from './types/Middlewares';
import { Route } from './types/Routes';
import { Response } from './Response';
import { ServerResponse } from 'http';

export const responseHandler = (
  req: IRequest,
  res: ServerResponse,
  routes: Route[],
  middlewares: Middleware[]
) => {
  const url = req.url.split('?')[0] || '/';
  const request = new Request(extractQueryParams(req.url), url);
  const response = new Response(res);
  const method = req.method || 'get';
  let index = 0;
  const route = routes.find(
    route => route.path === url && route.method === method
  );
  const handler = route?.handler;

  const next = async () => {
    if (index < middlewares.length) {
      const middleware = middlewares[index];
      index++;

      if (routes.some(route => route.handler === middleware)) {
        if (middleware === handler) {
          try {
            await middleware(request, response, () => {});
          } catch (err) {
            const error = <Error>err;
            response.json({
              err: error.message,
            });
          }
        } else {
          next();
        }
      } else {
        try {
        } catch (err) {
          const error = <Error>err;
          response.json({
            err: error.message,
          });
        }
      }
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  };
  next();
};
