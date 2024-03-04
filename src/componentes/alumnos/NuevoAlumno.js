import React, { Fragment, useDebugValue, useEffect, useState } from "react";
import ClienteAxios from "../../config/axios";

function NuevoAlumno(){
    
    const[carreras, guardarCarreras] = useState([]);
    const ConsultarAPI = async () => {
        const CarreraConsulta = await ClienteAxios.get('/carreras');
        guardarCarreras(CarreraConsulta.data);
    }
    useEffect(()=>{
        ConsultarAPI();
    },[]);

    const [alumno, guardarAlumnos] = useState({
        action: 'insert',
        carrera: '',
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
        estado: ''
    });
    
    const actualizarState = e =>{
        guardarAlumnos({
            ...alumno,
            [e.target.name] : e.target.value
        })
    }

    return(
        <Fragment>
            <h2>Nuevo Alumno</h2>

            <form>
                <legend>Llena todos los campos</legend>

                <div class="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre Alumno" name="nombre" onChange={actualizarState}/>
                </div>

                <div class="campo">
                    <label>Apellido:</label>
                    <input type="text" placeholder="Apellido Alumno" name="apellido"/>
                </div>
            
                <div class="campo">
                    <label>Carrera:</label>
                    <select name="carrera">
                        <option value="">Selecciona una opción</option>
                        {carreras.map (carrera =>
                        <option value={carrera.UNCR_ID}>{carrera.UNCR_CARRERA}</option>
                        )}
                    </select>
                </div>

                <div class="campo">
                    <label>Email:</label>
                    <input type="email" placeholder="Email Alumno" name="email"/>
                </div>

                <div class="campo">
                    <label>Edad:</label>
                    <input type="text" placeholder="Edad Alumno" name="edad"/>
                </div>

                <div class="campo">
                    <label>Estado:</label>
                    <select name="estado">
                        <option value="">Seleccione una opción</option>
                        <option value="1">Alumno inscrito</option>
                        <option value="2">Alumno baja temporal</option>
                        <option value="3">Alumno baja definitiva</option>
                    </select>
                </div>

                <div class="enviar">
                        <input type="submit" class="btn btn-azul" value="Agregar Alumno" disabled/>
                </div>

            </form>

        </Fragment>
    )
}


export default NuevoAlumno;