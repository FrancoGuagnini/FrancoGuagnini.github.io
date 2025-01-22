// Preloadeamos el elemento padre asi desp sabe donde ir
function preload(){
  const p5banner = document.querySelector("#p5banner");
}
const controles = document.querySelector("#controles");


const rect = p5banner.getBoundingClientRect()
const h = rect.height;
const w = rect.width;
  

let slider1, slider2;
let container;




function setup() {
  let cnv = createCanvas(w, h);
  cnv.parent(p5banner); //PADRE del CANVAS//
  background(255, 204, 0);
  video = createCapture(VIDEO);
  video.hide()



  let parentDiv = select('#controles');
  
  container = createDiv();
  container.position(0, 0);
  container.addClass("controles");

  // Create sliders and append them to the container
  
  p1 = createP("Diametro").parent(parentDiv).addClass("caption");
  s1 = createSlider(100, 1000, 300).parent(parentDiv);

  
  p2 = createP("Color").parent(parentDiv).addClass("caption");
  color = createColorPicker('deeppink').parent(parentDiv);
}

function draw() {
  
  image(video, 0, 0, 700, 200, 0, 0, video.width, video.height,  );

  let c = color.value()


  //when mouse button is pressed, circles turn black
  if (mouseIsPressed === true) {
    fill(c);
    stroke(1);
  } else {
    fill(0,0);
    stroke(0,0);
  }
  //white circles drawn at mouse position, diametro es el valor del slider
  circle(mouseX, mouseY, s1.value());

}



//GUARDAR IMAGEN.
function keyTyped() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'jpg');
    print("saving image");
  }
  return false;
  }


