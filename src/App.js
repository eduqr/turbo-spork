// import axios from 'axios';
// axios.get('http://localhost:8888/alumnos') //Returning pledges using a get-query
// .then((response) => { // Data retrieval and processing
//   console.log(response.data);})
//   .catch((error) => { // If the query fails, an error will be displayed on the terminal.
//     console.error(error);
//   });

import React,{Fragment} from "react";
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Alumnos from "./componentes/alumnos/Alumnos";
import Carreras from "./componentes/carreras/Carreras";
import Calificaciones from "./componentes/calificaciones/Calificaciones";
import NuevoAlumno from "./componentes/alumnos/NuevoAlumno";

function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
          <div class="grid contenedor contenido-principal">
            <Nav/>
            <main class="caja-contenido col-9">
            
            <Routes>
              <Route path="/" element={<Alumnos/>}/>
              <Route path="/carreras" element={<Carreras/>}/>
              <Route path="/calificaciones" element={<Calificaciones/>}/>
              <Route path="/nuevo-alumno" element={<NuevoAlumno/>}/>
            </Routes>
            
            </main>
          </div> 
      </Fragment>
    </Router> 
  );
}

export default App;