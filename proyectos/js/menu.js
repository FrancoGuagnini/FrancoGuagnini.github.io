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







  var acc = document.getElementsByClassName("acordion");
  var accCont = document.getElementsByClassName("texto-acordion");
  var i;
   
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
   
      /* Toggle between hiding and showing the active panel */
      var panel = this.firstElementChild ;
      var cont = this.querySelector(".panel-tarifas") ;
      
      var clas = panel.classList
      var classArray = Array.from(clas)
   
      console.log(cont)
   
      if (classArray.includes("visible") ) {
        panel.classList.remove("visible");
        cont.classList.remove("visible");
      } else {
        panel.classList.add("visible");
        cont.classList.add("visible");
      }
    });
  }



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the solid class to the header when you reach its scroll position. Remove "solid" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("solidheader");
  } else {
    header.classList.remove("solidheader");
  }
}


// When the user scrolls the page, execute myFunction





// const cursorRounded = document.querySelector('.rounded');



// const moveCursor = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
   
//   cursorRounded.style = `left: calc(${mouseX}px - 8rem  )`;
 
//   console.log(e.clientX)
// }

// window.addEventListener('mousemove', moveCursor)




const galeria = document.querySelector(".detalles-proyecto");
const containerImg = document.querySelector(".lightbox")
const img = document.querySelector(".show-img")
const buttongal = document.querySelector(".btngal")

galeria.addEventListener('click', (e) => {
  if(e.target.matches(".galeria-imagen")){
    img.src = e.target.src;
    containerImg.classList.add("show");
    console.log(e.target.src)
  }
  else{
    containerImg.classList.remove("show");
  }
});

img.addEventListener('click', function(){
  img.parentElement.classList.remove("show");
}
)






