import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from '../dto/create-supplier.dto';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';
import { Supplier } from '../entities/supplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
  ) {}

  async create(createSupplierDto: CreateSupplierDto): Promise<Supplier> {
    try {
      const supplier = this.supplierRepository.create({
        ...createSupplierDto,
        active: createSupplierDto.active ?? true,
      });
      return await this.supplierRepository.save(supplier);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAll(): Promise<Supplier[]> {
    try {
      return await this.supplierRepository.find();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findOne(id: number): Promise<Supplier | null> {
    try {
      return await this.supplierRepository.findOne({ where: { id } });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(
    id: number,
    updateSupplierDto: UpdateSupplierDto,
  ): Promise<Supplier | null> {
    try {
      await this.supplierRepository.update(id, updateSupplierDto);
      return this.findOne(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.supplierRepository.delete(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deactivate(id: number): Promise<Supplier | null> {
    try {
      await this.supplierRepository.update(id, { active: false });
      return this.findOne(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async activate(id: number): Promise<Supplier | null> {
    try {
      await this.supplierRepository.update(id, { active: true });
      return this.findOne(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
