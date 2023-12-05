import '../hojas-de-estilo/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
  return (

    <div className={completada ? 'contenedor-tarea completada' : 'contenedor-tarea'}> {/*Se añaden dos clases, contenedor-tarea y completada*/} 
        <div className='texto-tarea' 
          onClick={() => completarTarea(id)}>
          {texto}
        </div>
        
        <div className='contenedor-tarea-iconos' 
          onClick={() => eliminarTarea(id)}>
          <AiOutlineCloseCircle className='icono-tarea'/>
        </div>
    </div>
  )
}

export default Tarea