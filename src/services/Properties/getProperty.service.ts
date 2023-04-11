import { Properties } from './../../entities/propertiesEntity';
import AppDataSource from "../../data-source"

export const getPropertiesService = async () => {
    const propertiesRepository = AppDataSource.getRepository(Properties)

    const properties = await propertiesRepository.find({
        relations: {
        address: true
    }})

    return properties
}