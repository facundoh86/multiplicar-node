/*Requires*/
const fs = require('fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');

const {crearArchivo, listarTabla} =  require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
            listarTabla(argv.base) ;
            break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.blue}`))
            .catch(err => console.log(err));
            break;
    default:
        console.log('Comando no reconocido');
        break;
}

console.log(argv);

//console.log(process.argv);

//let argv2 = process.argv;
//console.log('Limite', argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);

