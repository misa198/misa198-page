import * as joi from 'joi';
import { NextApiRequest, NextApiResponse } from 'next';

export const getBlogsValidation = (
  req: NextApiRequest,
  res: NextApiResponse,
): any => {
  const { query } = req;
  const schema = joi.object({
    page: joi.number().integer().default(1),
    key: joi.string().max(500).optional().allow(''),
  });
  try {
    const { error, value } = schema.validate(query);
    if (error) {
      return res.status(400).send({ message: 'Bad request' });
    }
    req.query = value;
  } catch (e) {
    return res.status(400).send({ message: 'Bad request' });
  }
};
