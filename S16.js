//Declaracion de preguntas
var preguntas =["¿Cuantos vasos de agua consumes al dia?","¿Que te gusta hacer en tu tiempo libre? ","¿Con qué frecuencia te haces un chequeo médico?","¿Consumes ensalada diarimente?","¿Que deporte realizas?"];
//Declaracion de opciones, de cada elemento de la lista (que a su vez es una lista)
//corresponde a las posibles respuestas de una preguntaq
//Se mantiene el orden de la lista de preguntas

var opciones = [
    [" 8 vasos","4 vasos","2 vasos","bebidas azucaradas","Nada"],
    ["Salir a caminar","Dibujar","Escuchar musica","Dormir","Hacer deporte"],
    ["1 año","2 años","No recuerdo","3 meses"," 1 mes"],
    ["cuando me acuerdo","No","siempre","usualmente","aveces"],
    ["caminar","Futbol","Natacion","Tennis","correr"]
];

var puntajePorOpcion = [
    [5,4,3,2,1],
    [4,3,2,1,5],
    [3,2,1,5,4],
    [2,1,5,4,3],
    [1,5,4,3,2]
];  

//Aqui se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

//Despliegue de los resultados
function mostrarResultado() {
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;


    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";

    if (puntaje > 25) {
        estiloVida = "<span id='estilo-excelente'>EXCELENTE</span>";
    } else if (puntaje > 22) {
        estiloVida = "<span id='estilo-bueno'>BUENO</span>";
    } else if (puntaje > 15) {
        estiloVida = "<span id='estilo-aceptable'>ACEPTABLE</span>";
    } else if (puntaje > 10) {
        estiloVida = "<span id='estilo-regular'>REGULAR</span>";
    } else {
        estiloVida = "<span id='estilo-malo'>MALO</span>";
    }
    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que me conoces ${estiloVida}.</p>`;
}

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    if (i < preguntas.length) {
        puntaje += puntajePorOpcion[i][indice];
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}
function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("op5").innerHTML = opciones[i][4];
    
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
    i++;
}
siguientePregunta();  // Muestra la primera pregunta
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);
});
document.getElementById("op5").addEventListener("click", function () {
    actualizarPuntaje(5);
});