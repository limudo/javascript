var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raio, x, y, vel, controle;
var cont = 0;
raio = 10;
vel = 1;
x = canvas.width / 2;
y = 0;
controle = 1;
setInterval(function(){animLoop();}, 1);
function animLoop(){

  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,raio,0,Math.PI*2);
  ctx.fillStyle = "red";
  ctx.fill();
  if(controle == 1 ){
    y = y + vel;
  }
  else{
  y = y - vel;
  }
  if(y <= 5){
    controle = 1 ;
  }
  if (y > 390){
    controle = 2;
    cont ++;
  }
  if(y == 200 && cont == 1){
    alert("PAROU!");
    vel = 0;
    cont ++;
  }
}
