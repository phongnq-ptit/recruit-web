import { Connection } from '@/configs/database.config'
import { UserEntity } from '../entities/user.entity'

export const userRepo = Connection.getRepository(UserEntity)
