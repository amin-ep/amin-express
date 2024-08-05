import { ServerResponse } from 'http';

export class Response {
  private defaultStatusCode: number = 500;
  constructor(public res: ServerResponse) {}

  json(jsonObj: object) {
    this.res.setHeader('Content-Type', 'application/json');
    this.res.end(JSON.stringify(jsonObj));
  }

  status(code: number) {
    this.res.statusCode = code;
  }

  send(data: any, statusCode?: number): void {
    this.res.statusCode = statusCode || this.defaultStatusCode;

    if (typeof data === 'object') {
      this.res.setHeader('Content-Type', 'application/json');
      this.res.end(JSON.stringify(data));
    } else {
      this.res.end(data);
    }
  }
}
