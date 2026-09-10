import { useState } from "react";

const paquetes = [
  { valor: 0, texto: "Seleccione un paquete" },
  { valor: 150, texto: "Tour Basico - Q150 por persona" },
  { valor: 250, texto: "Tour Completo - Q250 por persona" },
  { valor: 350, texto: "Tour Premium - Q350 por persona" },
];

const serviciosDisponibles = [
  { id: "transporte", valor: 50, texto: "Transporte - Q50 por persona" },
  { id: "alimentacion", valor: 75, texto: "Alimentacion - Q75 por persona" },
  { id: "equipo", valor: 40, texto: "Equipo - Q40 por persona" },
];

function Cotizador() {
  const [asistentes, setAsistentes] = useState(1);
  const [paquete, setPaquete] = useState(0);
  const [servicios, setServicios] = useState([]);

  const toggleServicio = (id, valor) => {
    setServicios((prev) =>
      prev.some((s) => s.id === id)
        ? prev.filter((s) => s.id !== id)
        : [...prev, { id, valor }]
    );
  };

  const totalServicios = servicios.reduce((acc, s) => acc + s.valor, 0);
  const precioPorPersona = paquete + totalServicios;
  const total = asistentes * precioPorPersona;

  return (
    <table id="cotizacion" className="seccion">
      <tbody>
        <tr>
          <th>COTIZACION DE LA EXCURSION</th>
        </tr>
        <tr>
          <td>
            <div className="form-cotizacion">
              <label htmlFor="asistentes">Numero de Asistentes:</label>
              <input
                type="number"
                id="asistentes"
                min="1"
                value={asistentes}
                onChange={(e) => setAsistentes(Number(e.target.value) || 1)}
              />
              <br /><br />

              <label htmlFor="paquete">Tipo de paquete:</label>
              <select
                id="paquete"
                value={paquete}
                onChange={(e) => setPaquete(Number(e.target.value))}
              >
                {paquetes.map((p) => (
                  <option key={p.valor} value={p.valor}>{p.texto}</option>
                ))}
              </select>
              <br /><br />

              <p>Servicios adicionales:</p>
              {serviciosDisponibles.map((s) => (
                <label key={s.id} style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    checked={servicios.some((x) => x.id === s.id)}
                    onChange={() => toggleServicio(s.id, s.valor)}
                  /> {s.texto}
                </label>
              ))}
              <br />

              <h3>Precio total estimado: Q{total.toFixed(2)}</h3>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Cotizador;