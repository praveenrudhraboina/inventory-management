import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Timestamp } from 'typeorm';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {

    @IsNumber()
    id: number;

    @IsDate()
    updated: Timestamp;

    @IsString()
    location: string;

    @IsString()
    order_status: string;

    @IsNumber()
    quantity: number;

}
