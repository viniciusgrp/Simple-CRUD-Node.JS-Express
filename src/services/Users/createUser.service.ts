import { IUserRequest } from "../../interfaces/users/index";
import { User } from "../../entities/userEntity";
import AppDataSource from "../../data-source";
import { createUserResponseSchema } from "../../schema/Users/users.schema";

const createUserService = async (body: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const createdUser = userRepository.create(body);

  await userRepository.save(createdUser);

  const validated = await createUserResponseSchema.validate(createdUser, {
    stripUnknown: true,
    abortEarly: false,
  });

  return validated;
};

export default createUserService;
