import { compare } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/userEntity";
import { IUserLogin } from "../../interfaces/users/index";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/AppError";

export const authService = async (body: IUserLogin): Promise<string> => {
  const { email, password } = body;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("User or password invalid", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }


  const token = jwt.sign({ email }, String(process.env.SECRET_KEY), {
    expiresIn: "24h",
    subject: String(user.id),
  });

  return token;
};
