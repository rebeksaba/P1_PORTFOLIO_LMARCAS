document.addEventListener("DOMContentLoaded", function () {
  // Menú responsive
  const menuBtn = document.querySelector(".menu-responsive");
  const menu = document.getElementById("menu");
  const icono = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("mostrar");

    if (menu.classList.contains("mostrar")) {
      icono.classList.remove("fa-bars");
      icono.classList.add("fa-xmark");
    } else {
      icono.classList.remove("fa-xmark");
      icono.classList.add("fa-bars");
    }
  });

  // Popup de cookies
  const botonCookies = document.getElementById("aceptar-cookies");
  const popupCookies = document.getElementById("cookie-popup");
  const seccionPrivacidad = document.getElementById("privacidad"); // 👈 nueva línea

  if (localStorage.getItem("cookiesAceptadas")) {
    popupCookies.classList.add("oculto");

    
    if (seccionPrivacidad) {
      seccionPrivacidad.classList.add("oculto");
    }
  }

  botonCookies.addEventListener("click", function () {
    localStorage.setItem("cookiesAceptadas", true);
    popupCookies.classList.add("oculto");

    
    if (seccionPrivacidad) {
      seccionPrivacidad.classList.add("oculto");
    }
  });
});

  
  