import Header from "./components/Header";
import Menu from "./components/Menu";
import Descripcion from "./components/Descripcion";
import Galeria from "./components/Galeria";
import Itinerario from "./components/Itinerario";
import Cotizador from "./components/Cotizador";
import Actividades from "./components/Actividades";
import Reservacion from "./components/Reservacion";
import Testimonios from "./components/Testimonios";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <br />

      <table id="indice" className="seccion">
        <tbody>
          <tr><th>INDICE</th></tr>
          <tr>
            <td>
              <ul>
                <li>Descripcion</li>
                <li>Imagenes de Referencia</li>
                <li>Itinerario de la excursion</li>
                <li>Actividades</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      <Descripcion />
      <br />
      <Galeria />
      <br />
      <Itinerario />
      <br />
      <Cotizador />
      <br />
      <Actividades />
      <br />
      <Reservacion />
      <br />
      <Testimonios />
      <br />
      <Footer />
    </>
  );
}

export default App;