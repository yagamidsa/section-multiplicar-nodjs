const argv = require('./config/yargs').argv;
const colors = require('colors');







const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(listar => console.log(`archivo creado: ${listar}, con base:${argv.base} y limite:${argv.limite}`.blue))

        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`archivo Creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

}




//let base = '5';

//let argv2 = process.argv;







// let parametro = argv[2];
// let base = parametro.split('=')[1];