var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raio, x, y, vel, controleX, controleY;
raio = 15;
vel = 1;
x = canvas.width / 2;
y = canvas.height / 2;
controleX = 1;
controleY = 1;
setInterval(function(){animLoop();}, 1);
function animLoop(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,raio,0,Math.PI*2);
  ctx.fillStyle = "red";
  ctx.fill();
  if(controleY == 1 ){
    y = y + vel;
  }
  else{
    y = y - vel;
  }
  if(y <= 5){
    controleY = 1 ;
  }
  if (y >= 395){
    controleY = 2;
  }

  if(controleX == 1 ){
    x = x + vel;
  }
  else{
    x = x - vel;
  }
  if(x <= 5){
    controleX = 1 ;
  }
  if (x >= 795){
    controleX = 2;
  }
}
