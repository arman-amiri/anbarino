import { Injectable } from '@nestjs/common';
import { CreateWarehouseDto } from '../dto/create-warehouse.dto';
import { UpdateWarehouseDto } from '../dto/update-warehouse.dto';
import { Warehouse } from '../entities/warehouse.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
  ) {}

  async create(createWarehouseDto: CreateWarehouseDto): Promise<Warehouse> {
    try {
      const warehouse = this.warehouseRepository.create({
        ...createWarehouseDto,
        active: createWarehouseDto.active ?? true,
      });
      return await this.warehouseRepository.save(warehouse);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAll(): Promise<Warehouse[]> {
    try {
      return await this.warehouseRepository.find();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findOne(id: number): Promise<Warehouse | null> {
    try {
      return await this.warehouseRepository.findOne({ where: { id } });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(
    id: number,
    updateWarehouseDto: UpdateWarehouseDto,
  ): Promise<Warehouse | null> {
    try {
      await this.warehouseRepository.update(id, updateWarehouseDto);
      return this.findOne(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.warehouseRepository.delete(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async activate(id: number): Promise<Warehouse | null> {
    try {
      await this.warehouseRepository.update(id, { active: true });
      return this.findOne(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deactivate(id: number): Promise<Warehouse | null> {
    try {
      await this.warehouseRepository.update(id, { active: false });
      return this.findOne(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
