import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
){}

  create(order: CreateOrderDto) {
      this.orderRepository.save(order);
      return order;
  }

  findAll(){
      return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOneBy( {id});
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto) ;
  }

  remove(id: number) {
     return this.orderRepository.delete(id);
  }
  
}
