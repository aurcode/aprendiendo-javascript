var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d"); 

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

linea_ancho = ancho - 1
dibujarLinea("black", 1, 1, 1, linea_ancho);
dibujarLinea("black", linea_ancho, 1, 1, 1);
dibujarLinea("black", linea_ancho, 1, linea_ancho, linea_ancho);
dibujarLinea("black", linea_ancho, linea_ancho, 1, linea_ancho);

function dibujoPorClick()
{
	var lineas = parseInt(texto.value);
	var l = 1;
	var yi, xf;
	var xi, yf;
	var espacio = ancho / lineas

for (l = 0; l < lineas; l++ )
{
	yi = espacio * l;
	xf = espacio * (1 + l);
	dibujarLinea("red", 0, yi, xf, linea_ancho);
}

}
