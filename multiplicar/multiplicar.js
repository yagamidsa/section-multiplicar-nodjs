const fs = require('fs');
const colors = ('colors');





let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`.green);
            return;
        }
        if (!Number(limite)) {
            reject(`el valor introducido ${limite} no es un numero`.blue);
            return;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {

            data += (`${ base } * ${ i } = ${ base * i}\n`)
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });

}



let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }

        let data = ''

        for (let i = 1; i <= 10; i++) {

            data += (`${ base } * ${ i } = ${ base * i}\n`)
        };


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}