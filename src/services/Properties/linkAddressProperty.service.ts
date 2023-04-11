import AppDataSource from "../../data-source"
import { Address } from "../../entities/addressesEntity"
import { Properties } from "../../entities/propertiesEntity"

export const link = async (id: any, address:any ) => {
    const propertyRepository = AppDataSource.getRepository(Properties)

    const addressRepository = AppDataSource.getRepository(Address)

    const newPropertyAddress = addressRepository.create(address)
    await addressRepository.save(newPropertyAddress)

    await propertyRepository.update(
        {
            id: id
        },
        {
            address: newPropertyAddress
        }
    )
}