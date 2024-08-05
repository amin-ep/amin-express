import http, { createServer } from "http";

class AminExpress {
  use() {}
  get() {}

  post() {}

  put() {}

  delete() {}

  listen(port: number, cb: () => void) {
    const server = createServer();
    server.listen(port);
    cb();
  }
}

export default new AminExpress();
