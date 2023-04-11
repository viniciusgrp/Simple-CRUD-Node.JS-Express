import express from "express"
import 'express-async-errors'
import handleError from "./errors/handleError"    
import userRoutes from "./routes/users.routes"
import authRoutes from "./routes/auth.routes"
import categoriesRoutes from "./routes/categories.routes"
import propertiesRoutes from "./routes/properties.routes"


const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', authRoutes)
app.use('/categories', categoriesRoutes)
app.use('/properties', propertiesRoutes)

app.use(handleError)


export default app