import BadRequest from '@/middlewares/exceptions/BadRequest'
import { Request, Response, NextFunction } from 'express'

class AuthController {
  async login(request: Request, response: Response, next: NextFunction) {
    try {
      const a: string = 'vao day'
      //   if (a == 0) throw 'aksk'
      response.customSuccess(200, { a: a })
      //   return next(new BadRequest({ message: 'loi roi' }))
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }
}

export default AuthController
