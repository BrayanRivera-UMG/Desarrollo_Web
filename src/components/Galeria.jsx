import { useState } from "react";

const fotos = [
  { src: "/imagenes/lago_de_atitlan_1.jpg", titulo: "Vista panoramica del Lago de Atitlan" },
  { src: "/imagenes/lago_de_atitlan_2.jpg", titulo: "Vista del muelle del Lago de Atitlan" },
  { src: "/imagenes/lago_de_atitlan_3.jpg", titulo: "Paisaje del Lago de Atitlan" },
  { src: "/imagenes/lago_de_atitlan_4.jpg", titulo: "Vista de escalada cerca del Lago de Atitlan" },
];

function Galeria() {
  const [seleccionada, setSeleccionada] = useState(null);

  const cerrarModal = () => setSeleccionada(null);

  return (
    <>
      <table id="imagenes" className="seccion">
        <tbody>
          <tr>
            <th colSpan="4">IMAGENES DE REFERENCIA</th>
          </tr>
          <tr>
            {fotos.map((foto, i) => (
              <td key={i}>
                <img
                  className="foto"
                  src={foto.src}
                  alt="Lago de Atitlan"
                  onClick={() => setSeleccionada(foto)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {seleccionada && (
        <div className="modal activo" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar-modal" onClick={cerrarModal}>&times;</button>
            <img src={seleccionada.src} alt="Lago de Atitlan" />
            <h2>{seleccionada.titulo}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default Galeria;