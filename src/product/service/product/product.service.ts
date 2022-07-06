import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/product/dto/product.dto';
import { ProductEntity } from 'src/product/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    remove(arg0: number): ProductDto | PromiseLike<ProductDto> {
        throw new Error('Method not implemented.');
    }

    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>
    ){}
    
    // public products: ProductDto[] = [];

    create(product: ProductDto):ProductDto {
        this.productRepository.save(product);
        return product;
    }

    findAll(): Promise<ProductDto[]>{
        return this.productRepository.find();
    }
}
