import { getPropertiesService } from './../services/Properties/getProperty.service';
import { createPropertyService } from './../services/Properties/createProperty.service';
import { IPropertyRequest } from './../interfaces/properties/index';
import { Request, Response } from "express";

export const createPropertyController = async (req: Request, res: Response) => {
    const body: IPropertyRequest = req.body

    const newProperty = await createPropertyService(body)

    return res.status(201).json(newProperty)
}

export const getPropertiesController = async (req: Request, res: Response) => {
    const properties = await getPropertiesService()

    return res.status(200).json(properties)
}