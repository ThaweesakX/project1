import express from 'express';
import PostController from './controller/post.controller';

const app = express();
app.use(express.json());

app.post('/posts', PostController.createBlogPost);
app.get('/posts', PostController.getBlogPosts);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from TypeScript',
  });
});

app.all('*', (req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
});


export default app;
