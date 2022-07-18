import { IsDate, IsNumber, IsString } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateLocationDto {

    @IsNumber()
    id: number;

    @IsString()
    country: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsNumber()
    pincode:number;

    @IsString()
    location_type: string;

    @IsNumber()
    capacity: number;

    @IsDate()
    created: Timestamp;

    @IsDate()
    update: Timestamp
}
