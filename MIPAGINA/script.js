document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("boton");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", function() {
        mensaje.innerText = "KEVIN TE AMO";
    });
});
