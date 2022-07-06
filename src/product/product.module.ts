import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllerController } from './controller/controller.controller';
import { ProductEntity } from './entity/product.entity';
import { ProductService } from './service/product/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ControllerController],
  providers: [ProductService]
})
export class ProductModule {}
