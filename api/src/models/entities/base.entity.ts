import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Column, Generated } from 'typeorm'

export abstract class AbstractEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  @Generated('uuid')
  uuid: string

  @CreateDateColumn({ type: 'datetime' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'datetime' })
  updatedAt!: Date
}
