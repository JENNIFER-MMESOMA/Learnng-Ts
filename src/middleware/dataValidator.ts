import { Request, Response, NextFunction } from "express";

const validateDate = (req: Request, res: Response, next: NextFunction) => {

  next();
};
