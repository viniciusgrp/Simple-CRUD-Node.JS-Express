import { Category } from './../../entities/categoryEntity';
import AppDataSource from '../../data-source';
import { ICategoryRequest } from './../../interfaces/categories/index';
import { AppError } from '../../errors/AppError';

export const createCategoryService = async (body: ICategoryRequest) => {
    
    const categoriesRepository = AppDataSource.getRepository(Category)
    
    const find = await categoriesRepository.findOneBy({ name: body.name })

    console.log('find', find)
    
    if (find) {
        throw new AppError ("Category already exists", 400)
    }

    const newCategory = categoriesRepository.create(body)

    await categoriesRepository.save(newCategory)

    return newCategory
}