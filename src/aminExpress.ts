import { createServer } from 'http';
import { Middleware } from './types/Middleware.js';
import { Route } from './types/Route.js';

import { Express } from './interfaces/Express.js';

class AminExpress implements Express {
  public middlewares: Middleware[] = [];
  public routes: Route[] = [];

  public use(...middleware: Middleware[]) {
    this.middlewares.concat(middleware);
  }

  public get(path: string, handler: Middleware): void {
    this.routes.push({
      method: 'GET',
      path: path,
      handler: handler,
    });
    this.middlewares.push(handler);
  }

  public post(path: string, handler: Middleware): void {
    this.routes.push({
      method: 'POST',
      path: path,
      handler: handler,
    });
    this.middlewares.push(handler);
  }

  public put(path: string, handler: Middleware): void {
    this.routes.push({
      method: 'PUT',
      path: path,
      handler: handler,
    });
    this.middlewares.push(handler);
  }

  public delete(path: string, handler: Middleware): void {
    this.routes.push({
      method: 'DELETE',
      path: path,
      handler: handler,
    });
    this.middlewares.push(handler);
  }
  public listen(port: number, cb: () => Promise<void> | void) {
    const server = createServer((req, res) => {});
    server.listen(port);
    cb();
  }
}

export default function aminexpress() {
  return new AminExpress();
}
