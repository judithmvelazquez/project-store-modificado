import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../entities/category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "../dto/category.dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}
//crear un registro
  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepo.create(createCategoryDto);
    await this.categoryRepo.save(category);

    return category;
  }

  //encontrar una categoria
  //finOne(id: number){
   // return this.productRepo.findOneBy({ id });
  //}

  //Encontrar un registro con relaciones
  finOne(id: number) {
    return this.categoryRepo.findOne({
      where:{ id },
      relations: {
        autor: true,
      },

    });
  }

  //mostrar todos los registros
  findAll(){
    return this.categoryRepo.find({
      order: { id: 'ASC'},
    });
  }


//eliminar un registro
  async remove(id: number) {
  const category = await this.finOne(id);
  await this.categoryRepo.remove(category);
  return ' categoria eliminada satisfactoriamente' ;
  }

  //actualizar una categoria
  async update(id: number, cambios: CreateCategoryDto) {
    const oldprouct = await this.finOne(id);
    const updateProduct = await this.categoryRepo.merge(oldprouct, cambios);
    return this.categoryRepo.save(updateProduct);
  }
}
