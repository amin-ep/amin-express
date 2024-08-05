import { Middlewares } from './Middlewares';

export type Routes = {
    method: string;
    handler: Middlewares[];
    path: string;
};
