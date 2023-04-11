import { Request, Response, NextFunction } from "express"
import { AppError } from "../../errors/AppError"

export const patchDontAcceptPropertiesMidddleware = (req:Request, res:Response, next:NextFunction) => {
    if (req.body.isAdm || req.body.isActive || req.body.id){
        throw new AppError("Can't update some fields", 401)
    }
    return next()
}