function myFunction() {
  var x = document.getElementById("contenedor-menu-principal");
  if (x.className === "contenedor-menu-principal") {
    x.className += " responsive";
  } else {
    x.className = "contenedor-menu-principal";
  }
}
