var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); 
var lineas = 30
var l = 1
var yi, xf;
var xi, yf;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

for (l = 0; l < lineas; l++ )
{
	yi = 10 * l;
	xf = 10 * (1 + l);
	dibujarLinea("red", 0, yi, xf, 300);
}

for (l = 0; l < lineas; l++ )
{
	xi = 10 * l;
	yf = 10 * (1 + l);
	dibujarLinea("red", xi, 0, 300, yf);
}


dibujarLinea("black", 1, 1, 1, 299);
dibujarLinea("black", 300, 1, 1, 1);
dibujarLinea("black", 299, 1, 299, 299);
dibujarLinea("black", 299, 299, 1, 299);