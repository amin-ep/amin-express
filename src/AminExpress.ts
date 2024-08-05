import http, { createServer } from 'http';
import { Middlewares } from './types/Middlewares';
import { Routes } from './types/Routes';

class AminExpress {
  public middlewares: Middlewares[] = [];
  public routes: Routes[] = [];
  constructor() {}
  use(middleware: Middlewares) {
    this.middlewares.push(middleware);
  }

  get(path: string, handler: Middlewares[]) {
    this.routes.push({
      method: 'GET',
      handler,
      path,
    });
  }

  post(path: string, handler: Middlewares[]) {
    this.routes.push({
      method: 'POST',
      handler,
      path,
    });
  }

  delete(path: string, handler: Middlewares[]) {
    this.routes.push({
      method: 'DELETE',
      handler,
      path,
    });
  }

  put(path: string, handler: Middlewares[]) {
    this.routes.push({
      method: 'PUT',
      handler,
      path,
    });
  }

  listen(port: number, cb: () => void) {
    const server = createServer();
    server.listen(port);
    cb();
  }
}

export default function aminexpress() {
  return new AminExpress();
}
