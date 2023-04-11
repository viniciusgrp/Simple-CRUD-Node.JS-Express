import { getCategoriesService } from './../services/Categories/getCategories.service';
import { createCategoryService } from './../services/Categories/createCatemgory.service';
import { ICategoryRequest } from './../interfaces/categories/index';
import { Request, Response } from "express";
import { getPropertiesService } from '../services/Properties/getProperty.service';
import { getPropertyByCategoryService } from '../services/Categories/getPropertyByCategory';

export const createCategoryController = async (req: Request, res: Response) => {
    const data: ICategoryRequest = req.body

    const newCategory = await createCategoryService(data)

    return res.status(201).json(newCategory)
}

export const getCategoriesController = async (req: Request, res: Response) => {
    const categories = await getCategoriesService()

    return res.status(200).json(categories)
}

export const getPropertiesByCategories = async (req: Request, res: Response) => {
    const uuid: string = req.params.id
    const properties = await getPropertyByCategoryService(uuid)

    return res.status(200).json(properties)
}