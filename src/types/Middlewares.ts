import { IncomingMessage, ServerResponse } from 'http';

export type Query = { [index: string]: string[] };

export type Middleware = (
  req: Request,
  res: Response,
  next: () => Promise<void> | void
) => Promise<void> | void;
