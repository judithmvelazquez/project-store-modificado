import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProveedorDto } from "../dto/proveedor.dto";
import { Proveedor } from "../entities/proveedor.entity";


@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepo: Repository<Proveedor>,
  ) {}
//crear un registro
  async create(createProveedorDto: CreateProveedorDto) {
    const proveedor = this.proveedorRepo.create(createProveedorDto);
    await this.proveedorRepo.save(proveedor);

    return proveedor;
  }

  //encontrar una categoria
  //finOne(id: number){
   // return this.productRepo.findOneBy({ id });
  //}

  //Encontrar un registro con relaciones
  finOne(id: number) {
    return this.proveedorRepo.findOne({
      where:{ id },
      relations: {
        autor: true,
      },

    });
  }

  //mostrar todos los registros
  findAll(){
    return this.proveedorRepo.find({
      order: { id: 'ASC'},
    });
  }


//eliminar un registro
  async remove(id: number) {
  const proveedor = await this.finOne(id);
  await this.proveedorRepo.remove(proveedor);
  return ' proveedor eliminado satisfactoriamente' ;
  }

  //actualizar una categoria
  async update(id: number, cambios: CreateProveedorDto) {
    const oldproveedor = await this.finOne(id);
    const updateProveedor = await this.proveedorRepo.merge(oldproveedor, cambios);
    return this.proveedorRepo.save(updateProveedor);
  }
}
