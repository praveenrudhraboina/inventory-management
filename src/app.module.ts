import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
import { Order } from './order/entities/order.entity';
import { LocationModule } from './location/location.module';
import { Location } from './location/entities/location.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'new_password',
      database: 'test',
      entities: [Product, Order, Location],
      synchronize: true,
    }
  ),
    OrderModule,
    LocationModule,
    ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
