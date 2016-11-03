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
  }if(y <= 300 && cont == 1){
    y = 300;
    controle = 1;
  }if(y <= 375 && cont == 2){
    y = 375;
    controle = 1;
    cont++;
  }if(y <= 394 && cont == 3){
    y = 394;
    controle = 1;
    cont++;
  }
  if(y <=398 && cont == 4){
    y = 398;
    controle = 1;
    cont++;
  }
  if(y <= 398 && cont == 5){
    y = 398;
cont++;
    controle = 0;
    vel = 0;

  }if(y <=400 && cont == 6 ){
    
  }

}
