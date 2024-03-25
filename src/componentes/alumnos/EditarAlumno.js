import React, { Fragment, useEffect, useState } from "react";
import ClienteAxios from "../../config/axios";
import { useParams } from "react-router-dom";

function EditarAlumno() {
  let params = useParams();
  console.log(params.id);

  const [carreras, guardarCarrera] = useState([]);

  //const [alumno, guardareditarAlumno]         = useState([]);
  const [alumno, guardareditarAlumno] = useState({
    action: "update",
    carrera: "",
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
    estado: "",
    id: params.id,
  });

  const ConsultarAPI = async () => {
    const CarreraConsulta = await ClienteAxios.get("/carreras");
    const AlumnoConsulta = await ClienteAxios.get("/alumnos/" + params.id + "");
    //COLOCAR STATE
    guardarCarrera(CarreraConsulta.data);

    guardareditarAlumno(AlumnoConsulta.data[0]);
  };
  useEffect(() => {
    ConsultarAPI();
  }, []);

  /**codigo para validar formulario */

  const actualizarState = (e) => {
    console.log(e.target.value);
    guardareditarAlumno({
      ...alumno,
      [e.target.name]: e.target.value,
    });
  };

  const validarAlumno = () => {
    const { nombre, apellido, edad, email } = alumno;
    let valido =
      !nombre.length || !apellido.length || !edad.length || !email.length;
    return valido;
  };

  /*enviar post**/

  const ModificarAlumno = (e) => {
    e.preventDefault();
    ClienteAxios.post("/alumnos", alumno).then((res) => {
      console.log(res);
      alert("Alumno Modificado");
      window.location.reload();
    });
  };

  return (
    <Fragment>
      <h2>Editar Alumno</h2>

      <form onSubmit={ModificarAlumno}>
        <legend>Llena todos los campos</legend>

        <div class="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Alumno"
            name="nombre"
            onChange={actualizarState}
            value={alumno.nombre}
          />
        </div>

        <div class="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Alumno"
            name="apellido"
            onChange={actualizarState}
            value={alumno.apellido}
          />
        </div>

        <div class="campo">
          <label>Carrera:</label>
          <select name="carrera" onChange={actualizarState}>
            {carreras.map((carrera) => (
              <option
                value={carrera.UNCR_ID}
                selected={carrera.UNCR_ID === alumno.carrera}
              >
                {carrera.UNCR_CARRERA}
              </option>
            ))}
          </select>
        </div>

        <div class="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Alumno"
            name="email"
            onChange={actualizarState}
            value={alumno.email}
          />
        </div>

        <div class="campo">
          <label>Edad:</label>
          <input
            type="text"
            placeholder="Edad Alumno"
            name="edad"
            onChange={actualizarState}
            value={alumno.edad}
          />
        </div>

        <div className="campo">
          <label>Estado</label>
          <select name="estado" onChange={actualizarState}>
            <option value="1" selected={alumno.estado === 1}>
              Alumno Inscrito
            </option>
            <option value="2" selected={alumno.estado === 2}>
              Alumno Baja Temporal
            </option>
            <option value="3" selected={alumno.estado === 3}>
              Alumno Baja Definitiva
            </option>
          </select>
        </div>

        <div class="enviar">
          <input
            type="submit"
            class="btn btn-azul"
            value="Actualizar Información Alumno"
            disabled={validarAlumno()}
          />
        </div>
      </form>
    </Fragment>
  );
}

export default EditarAlumno;
