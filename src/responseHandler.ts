import { IRequest } from './interfaces/IRequest';
import { IResponse } from './interfaces/IResponse';
import { Middlewares } from './types/Middlewares';
import { Routes } from './types/Routes';

export const responseHandler = (
  req: IRequest,
  res: IResponse,
  routes: Routes,
  middlewares: Middlewares[]
) => {
  const url = req.url.split('?');
};
