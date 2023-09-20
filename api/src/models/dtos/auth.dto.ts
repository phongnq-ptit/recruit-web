import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator'
import { UserRole } from '../enums/role.enum'

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  userName: string

  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsOptional()
  tel: string

  @IsOptional()
  address: string

  @IsOptional()
  description: string

  @IsOptional()
  size: string

  @IsOptional()
  avatar: string

  @IsOptional()
  @Matches(
    `^${Object.values(UserRole)
      .filter((v) => typeof v !== 'number')
      .join('|')}$`,
    'i'
  )
  role: UserRole

  @IsOptional()
  active: number
}
