import { v4 as id } from 'uuid';

export const fileNamer = (
    req: Express.Request,
    file: Express.Multer.File,
   

    callback,
) => {
    if (!file) return callback(new Error('Archivo Vacio'), false);

    const fileExtension = file.mimetype.split('/')[1];
   

    //Creo una interpolacion, uniendo el uuid con la extension del archivo
    const fileNamer = `${id()}.${fileExtension}`;

    //Retornar el nombre del archivo
    callback(null, fileNamer);

    
};




export const filterNamer = (
    req: Express.Request,
    filter: Express.Multer.File,
   

    callback,
) => {
    if (!filter) return callback(new Error('Archivo Vacio'), false);

    const filterExtension = filter.mimetype.split('/')[1];
   

    //Creo una interpolacion, uniendo el uuid con la extension del archivo
    const filterNamer = `${id()}.${filterExtension}`;

    //Retornar el nombre del archivo
    callback(null, filterNamer);

    
};
