import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}
//crear un registro
  async create(createProductDto: CreateProductDto) {
    const product = this.productRepo.create(createProductDto);
    await this.productRepo.save(product);

    return product;
  }

  //encotrar un producto
  finOne(id: number){
    return this.productRepo.findOneBy({ id });
  }

  //mostrar todos los registros
  findAll(){
    return this.productRepo.find({
      order: { id: 'ASC'},
    });
  }


//eliminar un registro
  async remove(id: number) {
  const product = await this.finOne(id);
  await this.productRepo.remove(product);
  return ' producto eliminado satisfactoriamente' ;
  }

  //actualizar un producto
  async update(id: number, cambios: CreateProductDto) {
    const oldprouct = await this.finOne(id);
    const updateProduct = await this.productRepo.merge(oldprouct, cambios);
    return this.productRepo.save(updateProduct);
  }
}
