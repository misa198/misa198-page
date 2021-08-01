import * as joi from "joi";
import { Request, Response, NextFunction } from "express";

export const getBlogsValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  const { query } = req;
  const schema = joi.object({
    page: joi.number().integer().default(1),
    key: joi.string().max(500),
  });
  try {
    const { error, value } = schema.validate(query);
    if (error) return res.status(400).send({ message: "Bad request" });
    req.query = value;
    return next();
  } catch (e) {
    return res.status(400).send({ message: "Bad request" });
  }
};
