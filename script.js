// Menú hamburguesa para celulares
const botonMenu = document.querySelector(".navbar-burger");
const menu = document.getElementById(botonMenu.dataset.target);

botonMenu.addEventListener("click", function () {
    botonMenu.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    botonMenu.setAttribute("aria-expanded", menu.classList.contains("is-active"));
});

// Cerrar el menú al elegir una opción
menu.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        botonMenu.classList.remove("is-active");
        menu.classList.remove("is-active");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});

// Formulario de prueba
const formulario = document.getElementById("formulario-contacto");
const estadoContacto = document.getElementById("estado-contacto");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    estadoContacto.textContent = "Prueba completada. No se enviaron datos.";
    estadoContacto.classList.remove("is-hidden");
});
