import { User } from './../../entities/userEntity';
import AppDataSource from "../../data-source"
import { AppError } from '../../errors/AppError';

export const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const exists = await userRepository.findOneBy({ id: id })

    if (!exists){
        throw new AppError("Can't find user", 404)
    }

    if (!exists?.isActive) {
        throw new AppError("Can't delete", 400)
    }

    exists.isActive = false

    userRepository.save(exists)
    
    return
}