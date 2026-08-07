/* GALERIO INTERACTIVA */
const imagenes = document.querySelectorAll(".foto");
const modal = document.getElementById("modal");
const imagenModal = document.getElementById("imagenModal");
const tituloModal = document.getElementById("tituloModal");
const cerrarModal = document.getElementById("cerrarModal");

imagenes.forEach(function(imagen){
    imagen.addEventListener("click", function(){
        imagenModal.src = imagen.src;
        imagenModal.alt = imagen.alt;
        tituloModal.textContent = imagen.dataset.title;
        modal.classList.add("activo");
    });
});

cerrarModal.addEventListener("click", function(){
    modal.classList.remove("activo");
});

modal.addEventListener("click", function(event){
    if(event.target === modal){
        modal.classList.remove("activo");
    }
});

/* CALCULANDO LA COTIZACION */
const formCotizacion = document.getElementById("formCotizacion");

formCotizacion.addEventListener("submit", function(event){
    event.preventDefault();

    const asistentes = Number(document.getElementById("asistentes").value);

    const paquete = Number(document.getElementById("paquete").value);

    const servicios = document.querySelectorAll('input[name="servicio"]:checked');

    let precioServicios = 0;
    servicios.forEach(function(servicio){
        precioServicios += Number(servicio.value);
    });

    const precioPorPersona = paquete + precioServicios;
    const total = asistentes * precioPorPersona;
    const resultado = document.getElementById("resultadoCotizacion");

    resultado.textContent = "Precio total estimado: Q" + total.toFixed(2);
});


/* BUSCADOR DE ACTIVIDADES */
const buscador = document.getElementById("buscadorActividades");
const actividades = document.querySelectorAll("#listaActividades li");

buscador.addEventListener("input", function(){
    const textoBusqueda = buscador.value.toLowerCase();

    actividades.forEach(function(actividad){
        const textoActividad = actividad.textContent.toLowerCase();

        if(textoActividad.includes(textoBusqueda)){
            actividad.style.display = "";
        }else{
            actividad.style.display = "none";
        }
    });
});


/* FORMULARIO DE LA RESERVACION */
const formReservacion = document.getElementById("formReservacion");

formReservacion.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const personas = document.getElementById("personas").value;
    const mensaje = document.getElementById("mensajeReservacion");

    if(nombre === "" || correo === "" || personas === ""){
        mensaje.textContent = "Por favor, completa todos los campos requeridos"
        mensaje.classList.add("error");
        return;
    }

    mensaje.textContent = "Gracias " + nombre + "! Tu solicitud para " + personas + " personas ha sido registrada";

    mensaje.classList.remove("error");
    mensaje.classList.add("exito");
    formReservacion.reset();
});

/* TESTIMONIOS */

const nombres = [

    "Ana Gómez",
    "Carlos López",
    "María Rodríguez",
    "José Hernández",
    "Laura Martínez"

];

const comentarios = [

    "El Lago de Atitlán tiene paisajes increíbles y fue una experiencia inolvidable.",

    "Disfruté mucho el paseo en lancha y conocer los pueblos alrededor del lago.",

    "La excursión fue muy entretenida y pude conocer más sobre la cultura de Guatemala.",

    "Me encantaron los paisajes y la tranquilidad del Lago de Atitlán.",

    "Una excelente experiencia para disfrutar de la naturaleza y pasar tiempo con la familia."

];

const nombreTestimonio = document.getElementById("nombreTestimonio");
const comentarioTestimonio = document.getElementById("comentarioTestimonio");
const nuevoTestimonio = document.getElementById("nuevoTestimonio");

function mostrarTestimonio(){
    const posicion = Math.floor(Math.random() * nombres.length);

    nombreTestimonio.textContent = nombres[posicion];

    comentarioTestimonio.textContent = "\"" + comentarios[posicion] + "\"";

}

mostrarTestimonio();

nuevoTestimonio.addEventListener("click", function(){
    mostrarTestimonio();

});