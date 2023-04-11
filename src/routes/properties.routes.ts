import { userAdminRigthsMiddleware } from './../Middlewares/Users/userRights.middleware';
import { getPropertiesController, createPropertyController } from './../controllers/properties.controller';
import { createPropertyService } from './../services/Properties/createProperty.service';
import { Router } from 'express';

const propertiesRoutes = Router()

propertiesRoutes.post('', userAdminRigthsMiddleware, createPropertyController)
propertiesRoutes.get('', getPropertiesController)

export default propertiesRoutes