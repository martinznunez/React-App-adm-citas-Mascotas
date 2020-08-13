import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";
import PropTypes from "prop-types";

const Formulario = ({ guardarCitas }) => {
  const [citas, setCitas] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const actualizarCitas = (e) => {
    setCitas({ ...citas, [e.target.name]: e.target.value });
  };

  const { mascota, propietario, fecha, hora, sintomas } = citas;

  const [error, setError] = useState(false);

  const submitCita = (e) => {
    e.preventDefault();
    // validar

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    // asignar un id
    citas.id = uuid();

    // crear una cita

    guardarCitas(citas);
    // reniciar el from

    setCitas({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Citas</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <from>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          placeholder="Nombre Mascota"
          className="u-full-width"
          onChange={actualizarCitas}
          value={mascota}
        />
        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          placeholder="Nombre Propietario"
          className="u-full-width"
          onChange={actualizarCitas}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarCitas}
          value={fecha}
        />
        <label>Horario</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarCitas}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarCitas}
          value={sintomas}
        ></textarea>
        <button
          onClick={submitCita}
          type="submit"
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </from>
    </Fragment>
  );
};

Formulario.propTypes = {
  guardarCitas: PropTypes.func.isRequired,
};

export default Formulario;
