var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

console.log(teclas)
document.addEventListener("keydown", dibujarTeclado);

//variables del marco del lienzo
var d = document.getElementById("area_de_dibujo");
var ancho = d.width;
var largo = d.height;

//variables del area del dibujo
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = ancho/2;
var y = largo/2;

console.log(papel)

//variables de color
var muestrario;
var colorPredeterminado = "#ff0000";
window.addEventListener("load", startup, false);

//Función para dibujar
function dibujarLinea(color, grosor_del_lienzo, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = grosor_del_lienzo;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

// Seleccionar color
function startup() {
  muestrario = document.querySelector("#muestrario");
  muestrario.value = colorPredeterminado;
  muestrario.select();
}

//Marco del lienzo
linea_ancho = ancho - 1
linea_largo = largo - 1
dibujarLinea("black", 5, 1, 1, 1, linea_largo, papel);
dibujarLinea("black", 5, linea_ancho, 1, 1, 1, papel);
dibujarLinea("black", 5, linea_ancho, 1, linea_ancho, linea_largo, papel);
dibujarLinea("black", 5, linea_ancho, linea_largo, 1, linea_largo, papel);


//Funcion para que me reconozca la letra y en base a eso me dibuje
function dibujarTeclado(evento)
{
	var colorcito = event.target.value;
	var grosorcito = 5;
	var movimiento = 10;

	switch(evento.keyCode)
	{
		case teclas.UP:
			dibujarLinea(colorcito, grosorcito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
		break;

		case teclas.DOWN:
			dibujarLinea(colorcito, grosorcito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
		break;

		case teclas.LEFT:
			dibujarLinea(colorcito, grosorcito, x, y, x - movimiento, y, papel);
			x = x - movimiento;
	
		break;

		case teclas.RIGHT:
			dibujarLinea(colorcito, grosorcito, x, y, x + movimiento, y, papel);
			x = x + movimiento;
		break;

		default:
			console.log("Otra tecla");
		break;
	}
}