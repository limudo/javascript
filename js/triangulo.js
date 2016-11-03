
alert("Olá!");
var a = prompt("Digite o lado a do triangulo",  "LADO A");
var b = prompt("Digite o lado b do triangulo", "LADO B");
var c = prompt("Digite o lado c do triangulo", "LADO C");
var triangulo;
if(isNaN(a)|| isNaN(b) || isNaN(c)){
  alert("Valores Inválidos!");
}
if(a <= b+c && b <= a+c && c <= a+b){
  var triangulo = true;
}
else {
  var triangulo = false;
}
if (triangulo) {
if (a != b && b != c) {
document.write("É um triangulo escaleno!");
}
if(a == b && b == c && c == a){
  document.write("É um triangulo equilátero");
}
else{
  document.write("É um triangulo isósceles");
}
}
else{
    alert("Não é um triangulo!");
}
