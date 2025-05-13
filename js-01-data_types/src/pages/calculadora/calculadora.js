


function edadMeses(){
const edad = document.getElementById('birthdate').value;
Number(edad);
document.getElementById('result').innerText= edad * 12;
}