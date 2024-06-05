/* ---------------------------
   Se "capturan" los elementos
   del DOM a seleccionar
   --------------------------- */

// navegación
const nav = document.querySelector("header nav");
// botón que llama al menu
const menuBtn = document.querySelector("#menu");
// vínculos de los items

const menuHamb = document.querySelector("#menu-hamb");

const menuLink = document.querySelectorAll("nav ul li a", "#submenuprod ul li a");

const subMenuBtn = document.querySelector("#submenuprod");




menuBtn.addEventListener('click', toggleMenu);
  // se ejecuta la funcion "toggleMenu"

  // para cada vínculo del menú
menuLink.forEach( el => {
    // cuando se cliquea en un vínculo
  el.addEventListener('click', toggleMenu);
    // se ejecuta la función "toggleMenu"
});



function toggleMenu(e) {

    // previene efectos predeterminados de las etiquetas <a>
    e.preventDefault();
  
    // Si el ancho de la ventana del navegador
    // mide menos de 700px (el botón "hamburguesa" será visible)
    if (window.innerWidth < 750) {
  
      // agrega la clase "menuVisible" a nav, si no la tiene
      // y se la saca, si la tiene
      nav.classList.toggle("navegacion-visible");
      
      
      menuHamb.classList.toggle("menu-hamb-activ");
  
    }


    
  
  
    /// si el cliqueado es un vínculo
    if ( this.hasAttribute("href") ) {
  
      // guarda la ruta del vínculo
      let adondeVoy = this.getAttribute("href");
  
      // redirecciona a destino del vínculo
      window.location = adondeVoy;  
      
    } // fin de si es cliqueado un vinculo
  
    
  }







    // SUBMENUPRODUCTOS
subMenuBtn.addEventListener("click", toggleSubMenu);
  // se ejecuta la funcion "toggleMenu"

function toggleSubMenu(e) {

  // previene efectos predeterminados de las etiquetas <a>
  e.preventDefault();

  // Si el ancho de la ventana del navegador
  // mide menos de 750px (el botón "hamburguesa" será visible)
  if (window.innerWidth < 750) {

    // agrega la clase "menuVisible" a nav, si no la tiene
    // y se la saca, si la tiene
    subMenuBtn.classList.toggle("menu-productos-visible");

  }
  
  
}


