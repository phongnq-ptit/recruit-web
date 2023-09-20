import AuthController from '@/controllers/auth.controller'
import validationMiddleware from '@/middlewares/validation.middleware'
import { RegisterDto } from '@/models/dtos/auth.dto'
import { Router } from 'express'

const authController = new AuthController()
const authRoute: Router = Router()

authRoute.post('/register', validationMiddleware(RegisterDto), authController.register)

authRoute.post('/login', authController.login)

authRoute.post('/refreshToken', authController.refreshToken)

export default authRoute
