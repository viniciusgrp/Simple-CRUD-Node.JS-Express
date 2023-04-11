import AppDataSource from "../../data-source"
import { Category } from "../../entities/categoryEntity"

export const getPropertyByCategoryService = async (uuid: string) => {
    const categoryRepository = AppDataSource.getRepository(Category)

    const find = await categoryRepository.find({
        where: {
            id: uuid
        },
        relations: {
            properties: true
        }
    })

    return find
}