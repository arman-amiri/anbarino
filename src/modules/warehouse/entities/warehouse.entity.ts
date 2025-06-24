import { BaseEntity } from 'src/modules/base/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('warehouse')
export class Warehouse extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  manager?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ default: true })
  active: boolean;
}
