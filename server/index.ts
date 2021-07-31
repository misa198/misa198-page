import express, { Request, Response } from "express";
import next from "next";
import helmet from "helmet";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(
      helmet({
        contentSecurityPolicy: false,
      }),
    );

    server.all("*", (req: Request, res: Response) => {
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
