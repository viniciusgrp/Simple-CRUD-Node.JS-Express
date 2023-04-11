import { createUserResponseSchema } from "../../schema/Users/users.schema";
import { User } from "../../entities/userEntity";
import AppDataSource from "../../data-source";

export const getUsersService = async () => {
  const usersRepository = AppDataSource.getRepository(User);

  const users = await usersRepository.find();

  const usersWithoutPassword = await Promise.all(
    users.map(async (elem) => {
      return await createUserResponseSchema.validate(elem, {
        stripUnknown: true,
        abortEarly: false,
      });
    })
  );

  return usersWithoutPassword;
};
