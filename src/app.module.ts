import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ProductEntity } from './product/entity/product.entity';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'new_password',
      database: 'test',
      entities: [ProductEntity, Order],
      synchronize: true,
    }
  ),
    ProductModule,
    OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
