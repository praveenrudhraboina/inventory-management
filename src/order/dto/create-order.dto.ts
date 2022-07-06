import { IsDate, IsNumber, IsString } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateOrderDto {

    @IsNumber()
    id: number;

    @IsDate()
    created: Timestamp;

    @IsDate()
    updated: Timestamp;

    @IsString()
    location: string;

    @IsString()
    order_status: string;

    @IsNumber()
    quantity: number;

}
