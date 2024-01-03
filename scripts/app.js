// Obtener el elemento donde mostrar el alto y el ancho
var output = document.getElementById("output");

// Crear una función que actualice el alto y el ancho
function updateSize() {
  // Obtener el alto y el ancho de la ventana
  var height = window.innerHeight;
  var width = window.innerWidth;

  // Mostrar el alto y el ancho en el elemento
  output.innerHTML = "Ancho: " +  width + "px. : Alto" + height + "px.";
}

function openMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');

}

// Llamar a la función cuando se carga la página
updateSize();

// Llamar a la función cuando se cambia el tamaño de la ventana
window.addEventListener("resize", updateSize);