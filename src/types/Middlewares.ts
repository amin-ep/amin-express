import { IncomingMessage, ServerResponse } from "http";

export type Query = { [index: string]: string };

export type Middlewares = {
  req: IncomingMessage;
  res: ServerResponse;
  next: (error?: any) => void;
};
