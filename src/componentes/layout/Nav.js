import React from "react";
import { Link } from "react-router-dom";
function Nav(){
    return(
        <aside class="sidebar col-3">
            <h2>Administración</h2>

            <nav class="navegacion">
                <Link to={"/"} class="alumnos">Alumnos</Link>
                <Link to={"/carreras"} class="carreras">Carreras</Link>
                <Link to={"/calificaciones"} class="calificaciones">Calificaciones</Link>
                {/* <a href="/" class="alumnos">Alumnos</a>
                <a href="/carreras" class="carreras">Carreras</a>
                <a href="/calificaciones" class="calificaciones">Calificaciones</a> */}
            </nav>
        </aside>
    )
}
export default Nav;