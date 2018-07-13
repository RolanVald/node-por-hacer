const {argv} = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');




let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea= porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    
    case 'listar':
        let listado = porHacer.getListado();

        for( let tarea of listado ){
            console.log('=========== Por hacer ==============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('====================================='.green);
        }
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
    break;
    case 'borrar':
        let borrado = porHacer.borrar( argv.descripcion );
        console.log( borrado );
    break;
    case 'completados':
        let completo = porHacer.completados( argv.completado );
        for (const comp of completo) {
            console.log('=========== Completos ==============='.green);
            console.log(comp.descripcion);
            console.log('Estado: ', comp.completado);
            console.log('====================================='.green);
        }
    break;
    default:
        console.log('Comando no es reconocido');
    break;
}