import { Middleware } from '../types/Middleware.js';

export interface Express {
  listen(port: number, cb: () => Promise<void> | void): void;

  use: (middleware: Middleware) => void;

  //methods
  get(path: string, handler: Middleware): void;
  post(path: string, handler: Middleware): void;
  put(path: string, handler: Middleware): void;
  delete(path: string, handler: Middleware): void;
}
