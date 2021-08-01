import { config } from "dotenv";
import herokuAwake from "heroku-awake";

// eslint-disable-next-line import/order
import { domain } from "../constants/config";

if (process.env.NODE_ENV !== "production") {
  config();
} else {
  herokuAwake(domain);
}

import express, { Request, Response } from "express";
import next from "next";
import helmet from "helmet";

import blogsRoute from "./routes/blogs.route";
import { connectDb } from "./database";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    await connectDb();
    const server = express();
    server.use(
      helmet({
        contentSecurityPolicy: false,
      }),
    );

    server.use("/api/blogs", blogsRoute);
    server.all("/*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port} 🚀`);
    });
  } catch (e) {
    process.exit(1);
  }
})();
