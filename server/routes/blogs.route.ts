import { Router } from "express";

import controller from "../controllers/blogs.controller";

const router = Router();

router.get("/", controller.getBlogs);

export default router;
