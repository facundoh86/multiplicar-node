const options = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite: {
        alias:'l',
        default: 10
    }
}


const argv =require('yargs')
                    .command('listar','Imprime en consola tabla de multiplicar', options )
                    .command('crear','Crea en consola tabla de multiplicar',options)
                    .help()
                    .argv;

module.exports = {
    argv
}