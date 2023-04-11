import { userRigthsMiddleware, userAdminRigthsMiddleware } from './../Middlewares/Users/userRights.middleware';
import { ensureDataIsValidMiddleware, ensurePatchDataIsValidMiddleware } from './../Middlewares/ensureDataIsValid.middleware';
import { ensureUserDoesntExistsMiddleware } from "../Middlewares/Users/useExists.middleware";
import { createUserController, deleteUserController, getUsersController, patchUserController } from "./../controllers/users.controllers";
import { createUserSchema, patchUserSchema } from '../schema/Users/users.schema';
const { Router } = require("express");

const userRoutes = Router();

userRoutes.post("", ensureUserDoesntExistsMiddleware, ensureDataIsValidMiddleware(createUserSchema), createUserController);
userRoutes.get("", userRigthsMiddleware, getUsersController)
userRoutes.delete("/:id", userAdminRigthsMiddleware, deleteUserController)
userRoutes.patch("/:id", userRigthsMiddleware, ensurePatchDataIsValidMiddleware(patchUserSchema), patchUserController)

export default userRoutes;
