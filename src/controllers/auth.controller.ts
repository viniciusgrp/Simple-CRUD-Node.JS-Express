import { authService } from "../services/Auth/auth.service";
import { IUserLogin } from "./../interfaces/users/index";
import { Request, Response } from "express";

export const authController = async (req: Request, res: Response) => {
  const body: IUserLogin = req.body;

  const token = await authService(body);

  res.status(200).json({ token: token });
};
