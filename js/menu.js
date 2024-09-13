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

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;



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
      header.classList.add("solidheader");
  
    }


    
  
  
    /// si el cliqueado es un vínculo
    if ( this.hasAttribute("href") ) {
  
      // guarda la ruta del vínculo
      let adondeVoy = this.getAttribute("href");
  
      // redirecciona a destino del vínculo
      window.location = adondeVoy;  
      
    } // fin de si es cliqueado un vinculo
  
    
  }






   var acc = document.getElementsByClassName("tarifas-acordion");
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


// Add the solid class to the header when you reach its scroll position. Remove "solid" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("solidheader");
  } else {
    header.classList.remove("solidheader");
  }
}






// const cursorRounded = document.querySelector('.rounded');



// const moveCursor = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
   
//   cursorRounded.style = `left: calc(${mouseX}px - 8rem  )`;
 
//   console.log(e.clientX)
// }

// window.addEventListener('mousemove', moveCursor)







// FILTRO
const filterButtons = document.querySelectorAll(".filtro button");
const filtrableCards = document.querySelectorAll(".detalles-curso .proyecto");

console.log(filterButtons, filtrableCards);

const filterCards = e => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");


  filtrableCards.forEach(proyecto => {
    proyecto.classList.add("hide");
    
    if(proyecto.dataset.name.includes(e.target.dataset.name) || e.target.dataset.name === "todos"){
      
    // console.log(e.target.dataset.name);
      proyecto.classList.remove("hide");
    }
  })
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));






// window.onload = function() {contar()};


// function contar() {
//   // Get all elements with the data-name attribute set to "example"
//   const elements = document.querySelectorAll('[data-name="packaging"]');
//   console.log(elements)
  
//   // Get the count of these elements
//   const count = elements.length;

//   console.log(document.getElementsByClassName('packaging'))

  
//   // Display the count in the paragraph with id "countResult"
//         document.getElementById('packaging').textContent = `${count}: ${count}`;
// };


// document.addEventListener('DOMContentLoaded', (event) => {
//   // Get all buttons with class 'countButton'
//   const buttons = document.querySelectorAll('.countButton');
  
//   buttons.forEach(button => {
//       button.addEventListener('click', function() {
//           // Get the value of the data-name attribute for this button
//           const dataName = this.getAttribute('data-name');
          
//           // Get all elements with the same data-name attribute value
//           const elements = document.querySelectorAll(`[data-name="${dataName}"]`);
//           console.log(elements)
          
//           // Get the count of these elements
//           const count = elements.length;

//           this.textContent = `${dataName} (${count}) `;
//       });
//   });
// });









document.addEventListener('DOMContentLoaded', function() {
  // Array of image URLs
  const images = [
       "imagenes/imagen-shuffle (22).jpg",
       "imagenes/imagen-shuffle (1).jpg", 
       "imagenes/imagen-shuffle (2).jpg", 
       "imagenes/imagen-shuffle (3).jpg",
       "imagenes/imagen-shuffle (4).jpg",
       "imagenes/imagen-shuffle (8).jpg",
       "imagenes/imagen-shuffle (11).jpg", 
       "imagenes/imagen-shuffle (12).jpg", 
       "imagenes/imagen-shuffle (13).jpg", 
       "imagenes/imagen-shuffle (14).jpg", 
       "imagenes/imagen-shuffle (15).jpg", 
       "imagenes/imagen-shuffle (16).jpg", 
       "imagenes/imagen-shuffle (17).jpg", 
       "imagenes/imagen-shuffle (18).jpg", 
       "imagenes/imagen-shuffle (19).jpg", 
       "imagenes/imagen-shuffle (20).jpg", 
       "imagenes/imagen-shuffle (21).jpg",
  ];

  // Get the button and section elements
  const button = document.getElementById('refresh');
  const section = document.querySelector('.cita-home');

  // Function to get a random image URL from the array
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Function to set a random background image
function setRandomBackground() {
    section.style.backgroundImage = `url('${getRandomImage()}')`;
}

// Set a random background image on page load
setRandomBackground();

// Event listener for the button click
button.addEventListener('click', function() {
    setRandomBackground();
});
});






