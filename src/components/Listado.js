import React from "react";
import PropTypes from "prop-types";

const Listado = ({ notas, eliminarCita }) => (
  <div className="cita">
    <p>Mascota: {notas.mascota}</p>
    <p>Propietario: {notas.propietario}</p>
    <p>Fecha: {notas.fecha}</p>
    <p>Hora: {notas.hora}</p>
    <p>Sintomas: {notas.sintomas}</p>
    <button
      onClick={() => eliminarCita(notas.id)}
      className="button eliminar u-full-width"
    >
      Eliminar
    </button>
  </div>
);
Listado.propTypes = {
  notas: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Listado;
