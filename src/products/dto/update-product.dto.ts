import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { Location } from 'src/location/entities/location.entity';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsNumber()
    id: number;

    @IsString()
    product_name: string;

    @IsString()
    color: string;

    @IsNumber()
    price: number;

    @IsNumber()
    quantity: number;

    @IsString()
    status: string;

    // location: Location;

    // @ManyToMany(type => Location) @JoinColumn()
    // location: Location;

    // @IsString()
    // city: string;

    // @IsString()
    // location_type: string;
}
