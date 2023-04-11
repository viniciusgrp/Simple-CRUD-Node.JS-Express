import AppDataSource from "../../data-source"
import { User } from "../../entities/userEntity"
import { AppError } from "../../errors/AppError"
import { IUserUpdate } from "../../interfaces/users"

export const patchUserService = async (body: IUserUpdate, id: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const exists = await userRepository.findOneBy({ id: id })

    if (!exists){
        throw new AppError("Can't find user", 404)
    }

    const updatedUser = {
        ...exists,
        ...body
    }

    const updated = await userRepository.create(updatedUser)
    
    const response = await userRepository.save(updated)

    return response

}