import { useState } from "react";

const actividadesIniciales = [
  "Paseo en lancha",
  "Fotografia y observacion de aves",
  "Senderismo y exploracion de la naturaleza",
  "Comprar artesanias",
  "Visitar pueblos cercanos",
  "Observar el atardecer",
  "Degustar comida tipica",
  "Kayak",
  "Natacion",
  "Camping",
];

function Actividades() {
  const [busqueda, setBusqueda] = useState("");

  const filtradas = actividadesIniciales.filter((a) =>
    a.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <table id="actividades" className="seccion">
      <tbody>
        <tr>
          <th colSpan="4">ACTIVIDADES</th>
        </tr>
        <tr>
          <td>
            <label htmlFor="buscadorActividades">Buscar actividad</label>
            <input
              type="text"
              id="buscadorActividades"
              placeholder="Escribe una actividad..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <ul id="listaActividades">
              {filtradas.length > 0 ? (
                filtradas.map((a, i) => <li key={i}>{a}</li>)
              ) : (
                <li>No se encontraron actividades</li>
              )}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Actividades;