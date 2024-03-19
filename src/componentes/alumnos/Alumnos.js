import React, { Fragment, useEffect, useState } from "react";
import ClienteAxios from "../../config/axios";
import { Link } from "react-router-dom";

function Alumnnos() {
  const [alumnos, guardarAlumnos] = useState([]);
  const ConsultarAPI = async () => {
    const AlumnosConsulta = await ClienteAxios.get("/alumnos");
    //COLOCAR STATE
    guardarAlumnos(AlumnosConsulta.data);
    console.log(alumnos);
  };
  useEffect(() => {
    ConsultarAPI();
  }, []);

  const deleteAlumno = async (id) => {
    try {
      const response = await ClienteAxios.delete("/alumnos/" + id + "");
      alert("Alumno Eliminado");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <h2>Alumnos</h2>

      <Link to={"/nuevo-alumno"} class="btn btn-verde nvo-alumno">
        {" "}
        <i class="fas fa-plus-circle"></i>
        Nuevo alumno
      </Link>
      <ul class="listado-alumnos">
        {alumnos.map((alumno) => (
          <li class="alumno">
            <div class="info-alumno">
              <p class="nombre">
                {alumno.UNAL_NOMBRE} {alumno.UNAL_APELLIDO}
              </p>
              <p class="carrera">{alumno.UNCR_CARRERA}</p>
              <p>{alumno.UNAL_EMAIL}</p>
              <p>{alumno.UNAL_EDAD}</p>
            </div>
            <div class="acciones">
              <Link to={"/editaralumno/" + alumno.UNAL_ID} class="btn btn-azul">
                <i className="fas fa-pen-alt"></i>
                Editar Alumno
              </Link>
              <button
                type="button"
                class="btn btn-rojo btn-eliminar"
                onClick={() => deleteAlumno(alumno.UNAL_ID)}
              >
                <i className="fas fa-times"></i>
                Eliminar Alumno
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default Alumnnos;
