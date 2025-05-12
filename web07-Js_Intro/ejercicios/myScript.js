
function saludar(){
    alert("Ya casi nos vamos al segundo descanso");
}

function cambiarFondoBody(color){
    document.body.style.backgroundColor = color;
}

function changeToGreenColor(){
    const element = document.getElementById("green-paragraph");
    console.log(element);
    element.style.color = "green";
}

function changeColor(element, color){
    element.style.color = color;
    console.log(element);
}

(function setUp(){
    document.getElementById("tittle").style.color = "blue";
    document.getElementById("tittle").style.fontSize = "54px";
})();


function cambiarNombre() {
    const nombre = prompt("¿Cuál es tu nombre");
    document.getElementById("h1").textContent = "Hola" + " " + nombre;
}