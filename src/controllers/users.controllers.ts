import { IUserRequest, IUserUpdate } from "./../interfaces/users/index";
import { Request, Response } from "express";
import createUserService from "../services/Users/createUser.service";
import { getUsersService } from "../services/Users/getUsers.service";
import { deleteUserService } from "../services/Users/deleteUser.service";
import { patchUserService } from "../services/Users/patchUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const body: IUserRequest = req.body;
  const data = await createUserService(body);

  return res.status(201).json(data);
};

export const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();

  return res.status(200).json(users);
};

export const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(req.params.id);

    return res.status(204).json({message: "User deleted"})
}

export const patchUserController = async (req: Request, res:Response) => {
    const body: IUserUpdate = req.body

    const id : string = req.params.id

    const response = await patchUserService(body, id)


    return res.status(200).send({message: "Atualizou"})

}