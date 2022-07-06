import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { ProductService } from '../service/product/product.service';

@Controller('controller')
export class ControllerController {

    constructor(private productsService: ProductService){}

    @Post()
    async create(@Body() product: ProductDto): Promise<ProductDto>{
        return this.productsService.create(product);
    }

    @Get()
    async findAll(): Promise<ProductDto[]>{
        return this.productsService.findAll();
    }
}
