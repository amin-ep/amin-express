export interface IResponse {
  json: (data: object) => void;
  status: (code: number) => void;
  send: (data: any, statusCode?: number) => void;
}
