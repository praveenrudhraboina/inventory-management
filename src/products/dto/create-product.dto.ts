import { IsNumber, IsString } from "class-validator";
import { CreateLocationDto } from "src/location/dto/create-location.dto";
import { Location } from "src/location/entities/location.entity";

export class CreateProductDto {

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

    // @ManyToMany(type => Location) @JoinColumn()
    // location: Location;

    // @IsString()
    // city: string;

    // @IsString()
    // location_type: string;

    // location: Location;
    // constructor(location: Location, options?:CreateLocationDto){
    //     this.city = location.city;
    //     this.location_type = location.location_type;
    // }
}
