import { IsNumber, IsString } from "class-validator";

export class ProductDto {

    @IsNumber()
    id: number;

    @IsString()
    product_name: string;

    @IsString()
    color: string;
}
