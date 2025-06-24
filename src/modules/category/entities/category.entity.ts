
import { BaseEntity } from 'src/modules/base/base.entity';
import { Product } from 'src/modules/product/entities/product.entity';
import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Category')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  parentId: number;

  @Column({ nullable: true, length: 100, type: 'nvarchar' })
  title: string | null;

  @ManyToOne(() => Category, (category) => category.children)
  @JoinColumn({ name: 'parentId' })
  parent: Category;

  @OneToMany(() => Category, (category) => category.parent)
  @JoinColumn({ name: 'parentId' })
  children: Category[];

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
