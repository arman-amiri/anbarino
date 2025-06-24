import { BaseEntity } from "src/modules/base/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('supplier')
export class Supplier extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  taxCode?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ name: 'bank_account', nullable: true })
  bankAccount?: string;

  @Column({ name: 'contact_person', nullable: true })
  contactPerson?: string;

  @Column({ default: true })
  active: boolean;
}
