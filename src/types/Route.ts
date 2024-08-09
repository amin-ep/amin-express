import { Middleware } from './Middleware.js';

export type Route = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path?: string;
  handler: Middleware;
};
