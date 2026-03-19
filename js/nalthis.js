const contendor = document.getElementById('contenedorBarra');
const barra = document.getElementById('barra');
const text = document.getElementById('poder');

const valores = [0, 50, 200, 600, 1000, 2000, 3500, 5000, 10000, 20000, 50000];
const poder = ["", "Primera elevación. Reconocmiento de aura", "Segunda elevación. Tono perfecto", "Tercera elevación. Perfecto reconomiento del color",
     "Cuarta elevación. Perfecto sentido vital", "Quinta elevación. No envejecimiento", "Sexta elevación. Despertar instintivo", "Septima elevación. Reconocimiento de aliento investido", 
     "Octava elevación. Ruptura de Mandatos", "Novena elevación. Despertar superior, Mandato audible", "Décima elevación. Distorsión del color, invocación perfecta, Mandatos mentales, otros posibles"];

let arrastrando = false;
let valorObjetivo = 0;
let valorMostrado = 0;

function animacion(valor, indice) {
    if (valor === valorObjetivo) return;

    valorObjetivo = valor;

    const valorIni = valorMostrado;
    const duracion = 800;
    let tiempoIni = null;

    animacionFrame = requestAnimationFrame(pasoAnimacion);

    function pasoAnimacion(tiempoAct) {
        if (!tiempoIni) tiempoIni = tiempoAct;

        const progreso = tiempoAct - tiempoIni;

        let fraccion = progreso / duracion;
        if (fraccion > 1) fraccion = 1;

        let valorFrame = Math.floor(valorIni + (valorObjetivo - valorIni) * fraccion);

        valorMostrado = valorFrame;

        if (fraccion < 1) {

            barra.innerText = valorFrame.toLocaleString();
            animacionFrame = requestAnimationFrame(pasoAnimacion);
        } else {
            valorMostrado = valorObjetivo;

            barra.innerText = valorObjetivo.toLocaleString();
            text.innerText = poder[indice].toLocaleString();
        }

    }
}

function actualizarBarra(evento) {
    const ancho = contenedorBarra.offsetWidth;
    let posicion = evento.offsetX;

    let porcentaje = posicion / ancho;

    let indice = Math.round(porcentaje * 10);

    const valor = valores[indice];
    const porcentajeVisual = indice * 10;

    barra.style.width = porcentajeVisual + '%';

    animacion(valor, indice);
}

contenedorBarra.addEventListener('mousedown', function (evento) {
    arrastrando = true;
    actualizarBarra(evento);
});

contenedorBarra.addEventListener('mousemove', function (evento) {
    if (arrastrando) {
        actualizarBarra(evento);
    }
});

window.addEventListener('mouseup', function () {
    arrastrando = false;
});