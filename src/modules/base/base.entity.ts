import { Exclude } from 'class-transformer';
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @CreateDateColumn({
    select: false,
    type: 'datetime2',
    precision: 3,
    nullable: true,
  })
  createdAt: Date;

  @UpdateDateColumn({ select: false, type: 'datetime2', nullable: true })
  @Exclude({ toPlainOnly: true })
  updatedAt: Date;

  @DeleteDateColumn({ select: false, type: 'datetime2', nullable: true })
  @Exclude({ toPlainOnly: true })
  deletedAt: Date;
}
