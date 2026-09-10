const filas = [
  ["10/08/26", "7:00 AM", "Salida", "Ciudad"],
  ["10/08/26", "10:00 AM", "Llegada", "Panajachel"],
  ["10/08/26", "11:00 AM", "Recorrido en lancha", "Lago"],
  ["10/08/26", "1:00 PM", "Almuerzo", "Restaurante"],
  ["10/08/26", "3:00 PM", "Visita a San Juan", "San Juan"],
  ["10/08/26", "6:00 PM", "Regreso", "Ciudad"],
];

function Itinerario() {
  return (
    <table id="itinerario" className="seccion">
      <tbody>
        <tr>
          <th colSpan="4">ITINERARIO DE LA EXCURSION</th>
        </tr>
        <tr>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Actividad</th>
          <th>Lugar</th>
        </tr>
        {filas.map((fila, i) => (
          <tr key={i}>
            {fila.map((celda, j) => (
              <td key={j}>{celda}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Itinerario;