import AppDataSource from "../../data-source"
import { Category } from "../../entities/categoryEntity"

export const getCategoriesService = async () => {
    const categoriesRepository = AppDataSource.getRepository(Category)

    const categories = await categoriesRepository.find()

    return categories
}