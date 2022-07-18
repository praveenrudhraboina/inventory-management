import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
){}

// public products: ProductDto[] = [];

create(product: CreateProductDto):CreateProductDto {
    this.productRepository.save(product);
    return product;
}

findAll(){
    return this.productRepository.find();
}

findOne(id: number) {
    return this.productRepository.findOneBy( {id});
}

update(id: number, UpdateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, UpdateProductDto) ;
}

remove(id: number) {
     return this.productRepository.delete(id);
}
}
