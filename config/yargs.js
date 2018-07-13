
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias:'c',
    default: true,
    desc: 'Muestra el estatus de la tarea'
};

const argv = require('yargs')
    .command('crear','Crear un elemento por hacer',{
        descripcion
    })
    .command('actualizar','Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar','Elimina una tarea por hacer',{
        descripcion
    })
    .command('completados','Muestra todas las tareas completadas',{
        completado
    })
    .help()
    .argv;

module.exports={
    argv
}