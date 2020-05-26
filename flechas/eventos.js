var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

console.log(teclas)

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 5, 149, 149, 151, 151, papel);

function dibujarLinea(color, ancho, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = ancho;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento)
{
	var colorcito = "blue"
	var anchito = 3
	var movimiento = 1

	switch(evento.keyCode)
	{
		
		case teclas.UP:
			dibujarLinea(colorcito, anchito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
		break;

		case teclas.DOWN:
			dibujarLinea(colorcito, anchito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
		break;

		case teclas.LEFT:
			dibujarLinea(colorcito, anchito, x, y, x - movimiento, y, papel);
			x = x - movimiento;
	
		break;

		case teclas.RIGHT:
			dibujarLinea(colorcito, anchito, x, y, x + movimiento, y, papel);
			x = x + movimiento;
		break;

		default:
			console.log("Otra tecla");
		break;

	}
}