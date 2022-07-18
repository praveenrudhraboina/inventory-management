import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Timestamp } from 'typeorm';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
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

}
