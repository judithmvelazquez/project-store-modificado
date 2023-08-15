import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  getAllProducts() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepo.create(createProductDto);
    await this.productRepo.save(product);

    return product;
  }

  async delete(id: number) {
    // const product = await this.productRepo.findOne(id)
  }
}
