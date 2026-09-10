function Menu() {
  const enlaces = [
    { id: "indice", texto: "Indice" },
    { id: "descripcion", texto: "Descripcion" },
    { id: "imagenes", texto: "Imagenes de Referencia" },
    { id: "itinerario", texto: "Itinerario" },
    { id: "cotizacion", texto: "Cotizacion" },
    { id: "actividades", texto: "Actividades" },
    { id: "reservacion", texto: "Reservacion" },
    { id: "testimonios", texto: "Opiniones" },
  ];

  return (
    <table className="menu">
      <tbody>
        <tr>
          {enlaces.map((e) => (
            <th key={e.id}>
              <a href={`#${e.id}`}>{e.texto}</a>
            </th>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Menu;