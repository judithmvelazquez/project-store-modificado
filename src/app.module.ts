import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MarcasModule } from './marcas/marcas.module';
import { FilesModule } from './files/files.module';
import { PdfFilesModule } from './pdfFiles/pdfFiles.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'Store',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductsModule,
    UsersModule,
    MarcasModule,
    FilesModule,
    PdfFilesModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
