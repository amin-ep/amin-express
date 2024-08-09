import { Query } from './types/Query.js';

class Request {
  public query: Query;
  public url: string;
  constructor(query: Query, url: string) {
    this.query = query;
    this.url = url;
  }
}

export default Request;
