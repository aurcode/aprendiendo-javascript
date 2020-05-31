var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var cantidadDeVacas = aleatorio(0, 15);

var fondo = {
	url: "tile.png",
	cargaOK: false
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

var pollo = {
	url: "pollo.png",
	cargaOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar()
}

function cargarVacas()
{
	vaca.cargaOK = true
	dibujarVacas();
}

function cargarPollos()
{
	pollo.cargaOK = true
	dibujarPollos();
}

function cargarCerdos()
{
	cerdo.cargaOK = true
	dibujarCerdos();
}

function dibujar()
{
	if (fondo.cargaOK == true) 
	{
		papel.drawImage(fondo.objeto, 0, 0);
	}
}

function dibujarVacas()
{
	if (vaca.cargaOK == true) 
		{
			for(var v=0; v < cantidadDeVacas; v++)
			{
			var x = aleatorio(0, 420);
			var y = aleatorio(0, 420);
			papel.drawImage(vaca.objeto, x, y);
			}
		}
}

function dibujarPollos()
{
	if (pollo.cargaOK == true) 
		{
			papel.drawImage(pollo.objeto, 150, 100);
		}
}

function dibujarCerdos()
{
	if (cerdo.cargaOK == true) 
		{
			papel.drawImage(cerdo.objeto, 300, 300);
		}
}

function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}