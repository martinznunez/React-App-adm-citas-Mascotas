import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  const [cita, setcita] = useState(citasIniciales);

  const guardarCitas = (citas) => {
    setcita([...cita, citas]);
  };

  const eliminarCita = (id) => {
    const nuevaCitas = cita.filter((nueva) => nueva.id !== id);
    setcita(nuevaCitas);
  };

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(cita));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [cita]);

  const titulo =
    cita.length === 0 ? "No hay citas al momento" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administracion de Citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario guardarCitas={guardarCitas} />
          </div>
          <div className="one-half column">
            <h2> {titulo} </h2>

            {cita.map((notas) => (
              <Listado
                notas={notas}
                key={notas.id}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
