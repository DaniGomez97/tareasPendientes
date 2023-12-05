import React, {useState} from 'react'
import TareaFormulario from './TareaFormulario'
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from './Tarea'

function ListaDeTareas() {

const [tareas, setTareas] = useState([]) /* El valor inicial de tareas es un array vacio!*/

const agregarTarea = (tarea) => {
  if(tarea.texto.trim()) {   /* Si le quitamos los espacios al princi y final, es una cadena de texto no vacía */
    tarea.texto = tarea.texto.trim();
    const tareasActualizadas = [tarea, ...tareas];
    setTareas(tareasActualizadas);
  }
};

const eliminarTarea = (id) => {
  const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); /*Si el id NO es igual se añade al arreglo*/
  setTareas(tareasActualizadas)
};

const completarTarea = (id) => {
  const tareasActualizadas = tareas.map(tarea => {
    if(tarea.id === id){
      tarea.completada = !tarea.completada;
    }
    return tarea
  });
  setTareas(tareasActualizadas);
}
  
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
          {
            tareas.map((tarea)=> /* Recorre el array tareas y escribe... key id texto y completado */
              <Tarea 
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
              />)
          }
        </div>
    </>
  )
}

export default ListaDeTareas