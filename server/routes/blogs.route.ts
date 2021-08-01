import { Router } from "express";

import controller from "../controllers/blogs.controller";
import { getBlogsValidation } from "../validations/blogs/get-blogs.validation";

const router = Router();

router.get("/", getBlogsValidation, controller.getBlogs);
router.get("/:slug", controller.getBlog);

export default router;
