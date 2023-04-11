import { Address } from './../../entities/addressesEntity';
import { Properties } from './../../entities/propertiesEntity';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors/AppError';
import { Category } from '../../entities/categoryEntity';

export const createPropertyService = async (body: any) => {
    if (body.address.state.length > 2 || body.address.zipCode.length > 8) {
        throw new AppError("Invalid address", 400)
    }


    const propertyRepository = AppDataSource.getRepository(Properties)

    const addressRepository = AppDataSource.getRepository(Address)

    const categoryRepo = AppDataSource.getRepository(Category)

    const createCategory = categoryRepo.create({id: body.categoryId})

    const verifyAddress = await propertyRepository.findOneBy({ address: body.address })
    
    if (verifyAddress) {
        throw new AppError ("Address already in use", 400)
    }

    const newPropertyAddress = addressRepository.create(body.address)
    await addressRepository.save(newPropertyAddress)
    
    const newProperty = propertyRepository.create({
        ...body,
        address: newPropertyAddress,
        category: createCategory
    })
    
    await propertyRepository.save(newProperty)

    return newProperty
}