

//variables del marco del lienzo
var d = document.getElementById("area_de_dibujo");
var ancho = d.width;
var largo = d.height;

//variables del area del dibujo
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = ancho/2;
var y = largo/2;

//variables del mouse
var xInicio = 0;
var yInicio = 0;
var clicksostenido = false;

//variables de color
var muestrario;
var colorPredeterminado = "#ff0000";
window.addEventListener("load", startup, false);

// Seleccionar color
function startup()
{
  muestrario = document.querySelector("#muestrario");
  muestrario.value = colorPredeterminado;
  muestrario.select();
}

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

function empiezaLinea (evento)
{
    xInicio = evento.layerX;
    yInicio = evento.layerY;
    clicksostenido = true;
}

function terminaLinea (evento)
{
    clicksostenido = false;

}

function trazaLinea (evento)
{
    if (clicksostenido == true)
    {
    	var colorcito = event.target.value;
        dibujarLinea (colorcito, 10, xInicio, yInicio, evento.layerX, evento.layerY, papel)
        xInicio = evento.layerX
        yInicio = evento.layerY
    }
}

//Marco del lienzo
linea_ancho = ancho - 1
linea_largo = largo - 1
dibujarLinea("black", 10, 1, 1, 1, linea_largo, papel);
dibujarLinea("black", 10, linea_ancho, 1, 1, 1, papel);
dibujarLinea("black", 10, linea_ancho, 1, linea_ancho, linea_largo, papel);
dibujarLinea("black", 10, linea_ancho, linea_largo, 1, linea_largo, papel);


//Captura eventos del mouse
document.addEventListener ('mousedown', empiezaLinea);
document.addEventListener ('mouseup', terminaLinea);
document.addEventListener ('mousemove', trazaLinea);
