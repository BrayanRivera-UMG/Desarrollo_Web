import { useState } from "react";

const nombres = [
  "Ana Gómez",
  "Carlos López",
  "María Rodríguez",
  "José Hernández",
  "Laura Martínez",
];

const comentarios = [
  "El Lago de Atitlán tiene paisajes increíbles y fue una experiencia inolvidable.",
  "Disfruté mucho el paseo en lancha y conocer los pueblos alrededor del lago.",
  "La excursión fue muy entretenida y pude conocer más sobre la cultura de Guatemala.",
  "Me encantaron los paisajes y la tranquilidad del Lago de Atitlán.",
  "Una excelente experiencia para disfrutar de la naturaleza y pasar tiempo con la familia.",
];

function Testimonios() {
  const [posicion, setPosicion] = useState(0);

  const nuevoTestimonio = () => {
    let nueva;
    do {
      nueva = Math.floor(Math.random() * nombres.length);
    } while (nueva === posicion && nombres.length > 1);
    setPosicion(nueva);
  };

  return (
    <table id="testimonios" className="seccion">
      <tbody>
        <tr>
          <th>OPINIONES DE NUESTROS VISITANTES</th>
        </tr>
        <tr>
          <td>
            <div id="testimonio">
              <h3>{nombres[posicion]}</h3>
              <p>"{comentarios[posicion]}"</p>
            </div>
            <button onClick={nuevoTestimonio}>Ver otra opinion</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Testimonios;