const fs = require('fs');

let listadoPorHacer = [];


const guardarDB= () =>{
    
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json',data, (err)=>{
        if( err ) throw new Error ('No se pudo guardar la tarea: ',err);
    });
}

cargarDB = () =>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }  
}

getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado=true) =>{
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea =>{
        return tarea.descripcion === descripcion;
    });

    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else{
        return false;
    }
        
}

const crear = (descripcion)=>{
    cargarDB();
    let porHacer = {
        descripcion,
        completado:false
    };

    listadoPorHacer.push( porHacer );
    guardarDB();

    return porHacer;
}

const borrar = ( descripcion ) =>{
    cargarDB();

    let nuevoLis = listadoPorHacer.filter( tarea =>{
        return tarea.descripcion !== descripcion;
    });

    if ( listadoPorHacer.length === nuevoLis.length ){
        return false;
    }else{
        listadoPorHacer = nuevoLis;
        guardarDB();
        return true;
    }
}

const completados = ( completado=true ) =>{
    cargarDB();

    let nuevaLis = listadoPorHacer.filter( completo =>{
        return completo.completado === completado;
    });

    if ( listadoPorHacer.length === nuevaLis.length ){
        return false;
    }else{
        return nuevaLis;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    completados
}