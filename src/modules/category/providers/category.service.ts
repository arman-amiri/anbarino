import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const { title, parentId } = createCategoryDto;
      const category = this.categoryRepository.create({
        title: title,
      });
      if (parentId) category.parentId = parentId;
      return await this.categoryRepository.save(category);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAll(): Promise<Category[]> {
    try {
      return await this.categoryRepository.find({
        relations: ['children'],
        where: {
          parentId: IsNull(),
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    try {
      const { title, parentId } = updateCategoryDto;
      const category = await this.categoryRepository.findOneBy({ id });
      if (!category) throw new NotFoundException('دسته‌بندی یافت نشد');
      category.title = title;
      if (parentId) category.parentId = parentId;
      return await this.categoryRepository.save(category);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}
