import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { ProductImage } from './entities/product-image.entity';
import { Category } from './entities/category.entity';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controller';
import { Proveedor } from './entities/proveedor.entity';
import { proveedorController } from './controllers/proveedor.controller';
import { ProveedorService } from './services/proveedor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Category, Proveedor])],
  controllers: [ProductsController, CategoryController, proveedorController],
  providers: [ProductsService, CategoryService, ProveedorService],
})
export class ProductsModule {}
