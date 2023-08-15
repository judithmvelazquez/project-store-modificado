import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsServices: ProductsService) {}


  @Get()
  findAll() {
    return this.productsServices.findAll();
  }

  @Post()
  async create(@Body() productDto: CreateProductDto) {
    return await this.productsServices.create(productDto);

  }
}
