import { Middleware } from './Middlewares';
export type Route = {
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  path: string;
  handler: Middleware;
};
