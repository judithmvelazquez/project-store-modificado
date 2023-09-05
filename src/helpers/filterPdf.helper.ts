export const filterPdf = (
    req: Express.Request,
    filter: Express.Multer.File,
    callback,
) => {
    //si el archivo no existe o no viene entonces:
    if (!filter) return callback(new Error('Archivo Vacio'), false);

    //Llegamos hasta el mimetype y tomamos la extension del archivo
    const filterExtension = filter.mimetype.split('/')[1];

    //Estas serian las extensiones validas para los archivos
    const validExtension =['pdf', 'PDF'];

    //si las extensiones validas incluyen la extension del archivo
    if(validExtension.includes(filterExtension)){
        return callback(null, true);
    }


    callback(null, false);


};