export class Request {
  public query: { [index: string]: string[] };
  public url: string;
  constructor(query: { [index: string]: string[] }, url: string) {
    this.query = query;
    this.url = url;
  }
}
