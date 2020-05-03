import { Router } from 'express';
import feedRouter from './feed.routes';

const routes = Router();

routes.use('/feeds', feedRouter);

export default routes;
