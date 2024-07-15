import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

// Create the main Hono app
const app = new Hono();

app.get('/' , (c) => {
  return c.text("hello hono")
})

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app;