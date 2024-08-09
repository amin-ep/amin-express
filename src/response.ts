import { ServerResponse } from 'http';

interface IResponse {
  status(code: number): void;
  json(data: object): void;
  redirect(status: number, url: string): void;
  send(data: any): void;
}

class Response implements IResponse {
  constructor(public res: ServerResponse) {
    this.res = res;
  }

  status(code: number) {
    this.res.statusCode = code;
  }

  json(data: object) {
    this.res.setHeader('Content-Type', 'application/json');
    this.res.end(JSON.stringify(data));
  }

  send(data: any): void {
    if (typeof data === 'object') {
      this.json(data);
    } else {
      this.res.setHeader('Content-Type', 'application/json');
      this.res.end(data);
    }
  }

  redirect(status: number, url: string): void {
    // this.res.path = url;
    this.res.statusCode = status ?? 200;
    this.res.setHeader('Location', url);
    this.res.end();
  }
}

export default Response;
