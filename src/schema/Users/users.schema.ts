import * as yup from 'yup'

export const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean()
})

export const createUserResponseSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    isAdm: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    isActive: yup.boolean(),
    id: yup.string().uuid()
})

export const patchUserSchema = yup.object().shape({
    email: yup.string().email(),
    name: yup.string(),
    password: yup.string()
})