/*Obtaining the element of canvas*/
const canvas = document.getElementById('lienzo');
/*That is sentence to get context*/
const ctx = canvas.getContext('2d')
/*getting the properties of with and height*/
canvas.with = document.body.offsetWidth;
canvas.height = document.body.offsetHeight;
const w = canvas.width;
const h = canvas.height;

/*paint of canvas*/
ctx.fillstyle = "#000"
ctx.fillRect(0, 0, w, h)

/*it's getting the number of columns*/
const cols = Math.floor(w/20)+1
/*generate an array with zeros*/
const posicion_y = Array(cols).fill(0);

/*Function that generate matrix effect */
function matrix(){
  /*specifies the color, gradient, or pattern to use inside shapes*/
  ctx.fillStyle = "#0001";
  // This drawing method draws a filled rectangle at position (x, y). The size of the rectangle is determined by width (width) and height (height).
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0000ff";
  // define the properties about the font
  ctx.font = '15pt monospace';
  
  posicion_y.forEach((y, ind)=>{
    
    const text = String.fromCharCode(Math.random()*128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random()*10000){
      posicion_y[ind] = 0;
    }else{
      posicion_y[ind] = y + 20;
    }
  })
}
setInterval(matrix, 50);
