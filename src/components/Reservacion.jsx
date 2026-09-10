import { useState } from "react";

function Reservacion() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [personas, setPersonas] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim() || !personas) {
      setMensaje("Por favor, completa todos los campos requeridos");
      setError(true);
      return;
    }

    if (Number(personas) <= 0) {
      setMensaje("El numero de personas debe ser mayor a cero");
      setError(true);
      return;
    }

    setMensaje(
      `Gracias ${nombre}! Tu solicitud para ${personas} personas ha sido registrada`
    );
    setError(false);
    setNombre("");
    setCorreo("");
    setPersonas("");
  };

  return (
    <table id="reservacion" className="seccion">
      <tbody>
        <tr>
          <th>RESERVACION / CONTACTO</th>
        </tr>
        <tr>
          <td>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <br /><br />

              <label htmlFor="correo">Correo electronico:</label>
              <input
                type="email"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <br /><br />

              <label htmlFor="personas">Numero de Personas</label>
              <input
                type="number"
                id="personas"
                min="1"
                value={personas}
                onChange={(e) => setPersonas(e.target.value)}
              />
              <br /><br />

              <button type="submit">Enviar Solicitud</button>
            </form>
            <p className={error ? "error" : "exito"}>{mensaje}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Reservacion;