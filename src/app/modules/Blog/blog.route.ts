import express from 'express';

const blogRouter = express.Router();

blogRouter.post('/', (req, res) => {
  console.log(req.body);
});

export const BlogRoutes = blogRouter;
