document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript cargado correctamente");
  // Menú responsive
  const menuBtn = document.querySelector(".menu-responsive");
  const menu = document.getElementById("menu");
  const icono = menuBtn?.querySelector("i");

  menuBtn?.addEventListener("click", () => {
    menu?.classList.toggle("mostrar");

    if (menu?.classList.contains("mostrar")) {
      icono?.classList.remove("fa-bars");
      icono?.classList.add("fa-xmark");
    } else {
      icono?.classList.remove("fa-xmark");
      icono?.classList.add("fa-bars");
    }
  });

  // Popup de cookies
  const botonCookies = document.getElementById("aceptar-cookie");
  const popupCookies = document.getElementById("cookie-popup");

  if (localStorage.getItem("cookiesAceptadas")) {
    popupCookies?.classList.add("oculto");
  }

  botonCookies?.addEventListener("click", function () {
    localStorage.setItem("cookiesAceptadas", true);
    popupCookies?.classList.add("oculto");
  });
});

  
  