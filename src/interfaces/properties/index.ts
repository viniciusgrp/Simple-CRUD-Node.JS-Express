export interface IAddressRequest {
    district: string
    zipCode: string
    number?: string
    city: string
    state: string
}

export interface IPropertyRequest {
    id?: string
    value: number
    size: number
    address: IAddressRequest
    categoryId: string
}