import { Module } from '@nestjs/common';
import { WarehouseService } from './providers/warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from './entities/warehouse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse])],
  controllers: [WarehouseController],
  providers: [WarehouseService],
  // exports: [WarehouseService],
})
export class WarehouseModule {}
