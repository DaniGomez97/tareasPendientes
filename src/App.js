import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="App">
      <div className='tareas-lista-pricnipal'>
        <h1>MIS TAREAS</h1><br/>
          <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
