import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(dto: CreateProductDto) {
    try {
      const product = this.productRepository.create(dto);
      return this.productRepository.save(product);
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: number, dto: UpdateProductDto) {
    try {
      await this.productRepository.update(id, dto);
      return this.productRepository.findOneBy({ id });
    } catch (error) {
      console.error(error);
    }
  }

  findAll() {
    try {
      return this.productRepository.find();
    } catch (error) {
      console.error(error);
    }
  }

  findOne(id: number) {
    try {
      return this.productRepository.findOneBy({ id });
    } catch (error) {
      console.error(error);
    }
  }

  remove(id: number) {
    try {
      return this.productRepository.delete(id);
    } catch (error) {
      console.error(error);
    }
  }
}
