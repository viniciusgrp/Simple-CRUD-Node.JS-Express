import { IUserRequest } from "../../interfaces/users/index";
import { User } from "../../entities/userEntity";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";

export const ensureUserDoesntExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const find = await userRepository.findOneBy({
    email: req.body.email,
  });

  if (find) {
    throw new AppError("User already exists", 400)
  }

  return next()
};

export const ensureUserExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userRepository = AppDataSource.getRepository(User);
  
    const find = await userRepository.findOneByOrFail({
      email: req.body.email,
    });
  
    if (find) {
        return next()
    }
  
    return res.status(400);
  };
