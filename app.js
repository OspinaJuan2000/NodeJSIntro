const colors = require('colors');
const { crearArchivo } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(res => console.log(`Archivo creado: ${colors.green(res)}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando incorrecto'.red);
}