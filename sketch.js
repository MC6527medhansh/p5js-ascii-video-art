const density = "Ñ@#W$9876543210?!abc;:+=-,._                 ";

// let ariba;
let video;
let asciiDiv;

// function preload() {
//   // Load the image
//   ariba = loadImage('Ariba.jpg', img => {
//     // Resize the image to a lower resolution
//     img.resize(2, 0); // Resize width to 50 pixels, height will be scaled proportionally
//   });
// }

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(150, 80);
  video.hide();
  asciiDiv = createDiv();
}
  
function draw() {
  
//   background(0);
//   // image(ariba, 0, 0, width, height);
  
//   let w = width/ariba.width;
//   let h = height/ariba.height;
  
  video.loadPixels();
  let asciiImage = '';
  
  for (let j = 0; j<video.height; j++) {
    for (let i = 0; i<video.width; i++) {
      
      // ariba.loadPixels();
      
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b)/3;
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      
      const c = density.charAt(charIndex);
      if(c == ' ') asciiImage += '&nbsp;'
      else asciiImage += c;
    }
    
    asciiImage += '<br/>';
    // console.log(row)
  }
  
  asciiDiv.html(asciiImage);
}