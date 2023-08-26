import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { ProveedorService } from "../services/proveedor.service";
import { CreateProveedorDto } from "../dto/proveedor.dto";


@Controller('proveedor')
export class proveedorController {
  constructor(private readonly proveedorServices: ProveedorService) {}

  @Post()
  async create(@Body() proveedorDto: CreateProveedorDto) {
    return await this.proveedorServices.create(proveedorDto);
  }

  @Get()
  findAll() {
    return this.proveedorServices.findAll();

  }

  @Get(':id')
  finOne(@Param('id', ParseIntPipe) id: number){
    return this.proveedorServices.finOne(id);

  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.proveedorServices.remove(id);
  }

  //el metodo patch actualiza parcialmente
  //los pipes son transformadores, transforman la data
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() CreateProveedorDto: CreateProveedorDto,
  ) {
    return this.proveedorServices.update(id, CreateProveedorDto);
  }
}
