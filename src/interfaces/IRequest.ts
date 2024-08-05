import { IncomingMessage } from 'http';

export interface IRequest extends IncomingMessage {
  query: { [index: string]: string[] };
  url: string;
}
