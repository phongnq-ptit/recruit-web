import { Column, Entity } from 'typeorm'
import { Exclude } from 'class-transformer'
import { AbstractEntity } from './base.entity'
import { UserRole } from '../enums/role.enum'

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {
  @Column({ name: 'user_name', nullable: false })
  userName: string

  @Column({ unique: true })
  email: string

  @Column({ nullable: false })
  @Exclude()
  password: string

  @Column({ nullable: true })
  tel: string

  @Column({ nullable: true })
  address: string

  @Column({ type: 'mediumtext', nullable: true })
  description: string

  @Column({ nullable: true })
  size: string

  @Column({ nullable: true })
  avatar: string

  @Column({ nullable: false, type: 'enum', enum: UserRole, default: UserRole.CLIENT })
  role: UserRole

  @Column({ default: 1, nullable: false })
  active: number
}
