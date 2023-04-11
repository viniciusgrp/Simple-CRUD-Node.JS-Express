import { IUser } from './../../interfaces/users/index';
import { User } from './../../entities/userEntity';
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express"
import { AppError } from "../../errors/AppError"
import AppDataSource from "../../data-source";
import "dotenv/config";


export const userRigthsMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        throw new AppError("Missing authorization token", 401)
    }

    const userRepository = AppDataSource.getRepository(User)


    return jwt.verify(token, String(process.env.SECRET_KEY), async (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: error.message });
        }

        const uuid : any = decoded?.sub;
        
        const userCheck = await userRepository.findOneBy({ id: uuid })

        if (userCheck?.isAdm || userCheck?.id === req.params.id) {
            return next()
        }

        throw new AppError("Missing rights", 403)
      })
}
    
export const userAdminRigthsMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]

    const userRepository = AppDataSource.getRepository(User)

    if (!token) {
        throw new AppError("Missing authorization token", 401)
    }

    return jwt.verify(token, String(process.env.SECRET_KEY), async (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: error.message });
        }

        const uuid : any = decoded?.sub;
        
        const userCheck = await userRepository.findOneBy({ id: uuid })

        if (userCheck?.isAdm) {
            return next()
        }

        throw new AppError("Missing rights", 403)
      })
    }