import { BadRequestException, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PdfFilesService } from "../service/pdfFiles.service";
import { filterPdf } from "src/helpers/filterPdf.helper";
import { diskStorage } from "multer";
import { filterNamer } from "src/helpers/fileNamer.helper";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('pdffiles')
export class PdfFilesController {
    constructor(private readonly pdffilesService: PdfFilesService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
      fileFilter: filterPdf,

      storage: diskStorage({
        destination: './Files/pdf/Archivos',
        filename: filterNamer,
      }),
    }),
  )
    uploadFilter(@UploadedFile() filter: Express.Multer.File) {
      if(!filter) {
        throw new  BadRequestException('Asegurese que el archivo es un pdf');
      }

      return{
        filterName: filter.filename,
      };
    }

    @Get('product/:imageId')
    getImage() {
    return 'Hola Mundo';
  }
}

