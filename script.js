const formulario = document.getElementById("formularioEstudiante");

console.log(formulario);

const nombre = document.getElementById("name");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const carrera = document.getElementById("carrera");

console.log(nombre.value);
console.log(apellido.value);
console.log(edad.value);
console.log(carrera.value);


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    console.log(nombre.value);
    console.log(apellido.value);
    console.log(edad.value);
    console.log(carrera.value);
});