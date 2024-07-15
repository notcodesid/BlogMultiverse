import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

export const userRouter = new Hono<{
    Bindings : {
      DATABASE_URL : string
      JWT_SECRET : string,
    }
  }>();


  userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try {
      const body = await c.req.json();
      console.log('Received body:', body);
  
      if (!body.email || !body.password) {
        c.status(400);
        return c.json({ error: "Email and password are required" });
      }
  
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: body.email }
      });
  
      if (existingUser) {
        c.status(409); // Conflict
        return c.json({ error: "User with this email already exists" });
      }
  
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password // Remember to hash this password
        }
      });
  
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    } catch(e) {
      console.error('Error during signup:', e);
      c.status(500);
      return c.json({ error: "Error while signing up" });
    } finally {
      await prisma.$disconnect();
    }
  });
  
userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})