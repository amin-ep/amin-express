import { IncomingMessage, ServerResponse } from 'http';
import { Route } from './types/Route.js';
import { Middleware } from './types/Middleware.js';
import Response from './response.js';
import Request from './request.js';
import queryExtractor from './queryExtractor.js';
export default function responseHandler(
  req: IncomingMessage,
  res: ServerResponse,
  routes: Route[],
  middlewares: Middleware[]
) {
  const url = req.url?.split('?')[0] || '/';
  const request = new Request(queryExtractor(req.url!), url);
  const response = new Response(res);
  const method = req.method || 'GET';
  let index: number = 0;

  const route = routes.find(r => r.path === url && r?.method === method);
  const handler = route?.handler;

  const next = async () => {
    if (index < middlewares.length) {
      const middleware = middlewares[index];
      index++;

      if (routes.some(r => r.handler === middleware)) {
        if (middleware === handler) {
          try {
            await middleware(request, response, () => {});
            index++;
          } catch (err) {
            const error = err as Error;
            response.json({
              err: error.message,
            });
          }
        } else {
          try {
            await middleware(request, response, next);
          } catch (err) {
            const error = err as Error;
            response.json({
              err: error.message,
            });
          }
        }
      } else {
        res.statusCode = 404;
        res.end('Not Found');
      }
    }
  };

  next();
}
