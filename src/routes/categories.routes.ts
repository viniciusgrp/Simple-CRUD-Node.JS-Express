import { userAdminRigthsMiddleware } from './../Middlewares/Users/userRights.middleware';
import { createCategoryController, getCategoriesController, getPropertiesByCategories } from './../controllers/categories.controller';
import { Router } from 'express';

const categoriesRoutes = Router()

categoriesRoutes.post('', userAdminRigthsMiddleware, createCategoryController)
categoriesRoutes.get('', getCategoriesController)
categoriesRoutes.get('/:id/properties', getPropertiesByCategories)

export default categoriesRoutes