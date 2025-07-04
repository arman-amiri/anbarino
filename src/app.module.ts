import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { SupplierModule } from './modules/supplier/supplier.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';
import typeormConfig from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.ENV}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeormConfig),
    CategoryModule,
    ProductModule,
    SupplierModule,
    WarehouseModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
