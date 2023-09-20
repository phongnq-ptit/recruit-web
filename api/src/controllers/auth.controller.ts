import BadRequest from '@/middlewares/exceptions/BadRequest'
import { RegisterDto } from '@/models/dtos/auth.dto'
import { UserEntity } from '@/models/entities/user.entity'
import { ErrorCode } from '@/models/enums/errorCode.enum'
import { userRepo } from '@/models/repositories'
import { Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcrypt'

class AuthController {
  async login(request: Request, response: Response, next: NextFunction) {
    try {
    } catch (e) {
      return next(new BadRequest({ message: e.message }))
    }
  }

  async register(request: Request, response: Response, next: NextFunction) {
    try {
      const { userName, email, password, tel, address, description, size, avatar, role, active }: Partial<RegisterDto> =
        request.body
      const user: UserEntity = await userRepo.findOneBy({ email })
      if (user)
        return next(new BadRequest({ message: 'Người dùng đã tồn tại!', errorCode: ErrorCode.USER_ALREADY_EXISTS }))
      const newUser: Partial<UserEntity> = {
        userName,
        email,
        password: bcrypt.hashSync(password, 10),
        tel,
        address,
        description,
        size,
        avatar,
        role,
        active
      }
      userRepo.save(newUser)

      response.status(204).send('No content')
    } catch (error) {
      return next(new BadRequest({ message: error.message }))
    }
  }

  async refreshToken(request: Request, response: Response, next: NextFunction) {}

  compareHashPassword(password: string, rawPassword: string): boolean {
    return bcrypt.compareSync(rawPassword, bcrypt.hashSync(password, 10))
  }
}

export default AuthController
