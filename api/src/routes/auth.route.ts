import AuthController from '@/controllers/auth.controller'
import { Router } from 'express'

const authController = new AuthController()
const authRoute: Router = Router()

authRoute.get('/login', authController.login)

export default authRoute
