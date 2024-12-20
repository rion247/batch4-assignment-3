import express from 'express';
import { BlogRoutes } from '../app/modules/Blog/blog.route';

const router = express.Router();

const moduleRoutes = [
  //   { path: '/auth', route: AuthRoutes },
  { path: '/blogs', route: BlogRoutes },
];

moduleRoutes.forEach((module) => {
  router.use(module.path, module.route);
});

export default router;
