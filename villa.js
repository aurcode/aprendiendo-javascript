var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);
document.addEventListener("keydown", moverLobo);

var cantidadDeVacas = aleatorio(-4, 10);
var cantidadDePollos = aleatorio(-4, 10);
console.log("Hay " + cantidadDeVacas + " vacas");
console.log("Hay " + cantidadDePollos + " pollos");

var xcerdo = 0;
var ycerdo = 0;
var xlobo = 200;
var ylobo = -20;

var xVaca = new Array();
var yVaca = new Array();
var xPollo = new Array();
var yPollo = new Array();

var puntox1 = new Array();
var puntoy1 = new Array();
var puntox2 = new Array();
var puntoy2 = new Array();
var puntox3 = new Array();
var puntoy3 = new Array();

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
  cargaOK: false, 
  UP: 38, 
  DOWN: 40, 
  LEFT: 37, 
  RIGHT: 39
};

var lobo = {
  url: "lobo.png",
  cargaOK: false,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
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

lobo.objeto = new Image();
lobo.objeto.src = lobo.url;
lobo.objeto.addEventListener("load", cargarLobo);

function cargarFondo()
{
  fondo.cargaOK = true;
  mantenerPosicion();
}

function cargarVacas()
{
  vaca.cargaOK = true
  mantenerPosicion();
}

function cargarPollos()
{
  pollo.cargaOK = true
  mantenerPosicion();
}

function cargarCerdos()
{
  cerdo.cargaOK = true
  dibujar();
}

function cargarLobo()
{
  lobo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOK == true) 
  {
    papel.drawImage(fondo.objeto, 0, 0);
  }
}
function mantenerPosicion()
{
  if(fondo.cargaOK)
  {
    var punto_x = aleatorio(50, 250);
    var punto_y = aleatorio(100, 200);
    var punto_x2 = aleatorio(280, 420);
    var punto_y2 = aleatorio(80, 250);
    var punto_x3 = aleatorio(100, 220);
    var punto_y3 = aleatorio(250, 450);

    puntox1[i] = punto_x;
    puntoy1[i] = punto_y;
    puntox2[i] = punto_x2;
    puntoy2[i] = punto_y2;
    puntox3[i] = punto_x3;
    puntoy3[i] = punto_y3;
  }
  if(vaca.cargaOK)
  {
    for(var i=0; i<cantidadDeVacas; i++)
    {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      x = x*70;
      y = y*70;
      xVaca[i] = x;
      yVaca[i] = y;
    }
  }
  if(pollo.cargaOK)
  {
    for(var i=0; i<cantidadDePollos; i++)
    {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      x = x*70;
      y = y*70;
      xPollo[i] = x;
      yPollo[i] = y;
    }
  }
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOK)
  {
    var color_camino = null;
    var anchura_camino = 8;
    papel.drawImage(fondo.objeto, 0, 0);
    dibujarLinea(color_camino, 40, 40, puntox1[i], puntoy1[i], papel, anchura_camino);
    x = puntox1[i];
    y = puntoy1[i];
    dibujarLinea(color_camino, x, y, puntox2[i], puntoy2[i], papel, anchura_camino);
    x = puntox2[i];
    y = puntoy2[i];
    dibujarLinea(color_camino, x, y, puntox3[i], puntoy3[i], papel, anchura_camino);
    x = puntox3[i]
    y = puntoy3[i];
    dibujarLinea(color_camino, x, y, 470, 470, papel, anchura_camino);
  }
  if(vaca.cargaOK)
  {
    for(var i=0; i<10; i++){
      papel.drawImage(vaca.objeto, xVaca[i], yVaca[i]);
    }
  }
  if(pollo.cargaOK)
  {
    for(var i=0; i<10; i++){
      papel.drawImage(pollo.objeto, xPollo[i], yPollo[i]);
    }
  }
  if (cerdo.cargaOK)
  {
    papel.drawImage(cerdo.objeto, xcerdo, ycerdo);
  }
  if (lobo.cargaOK)
  {
    papel.drawImage(lobo.objeto, xlobo, ylobo);
  }
}

function moverCerdo(evento)
{
  var mov = 7.8;

  if (cerdo.cargaOK)
  {
    if (evento.keyCode == cerdo.RIGHT)
    {
      xcerdo = xcerdo+mov;
      dibujar();
    }
    if (evento.keyCode == cerdo.LEFT)
    {
      xcerdo = xcerdo-mov;
      dibujar();
    }
    if (evento.keyCode == cerdo.UP)
    {
      ycerdo = ycerdo-mov;
      dibujar();
    }
    if (evento.keyCode == cerdo.DOWN)
    {
      ycerdo = ycerdo+mov;
      dibujar();
    }
    if  (ycerdo>=410 && xcerdo>=420)
    {
      alert("FELICIDADES, LLEGASTE A TIEMPO Y LOS CERDITOS YA NO SERAN LA CENA XDXD");
    }
  }
}
function moverLobo(evento)
{
  var mov = 3.5;

  if (lobo.cargaOK)
  {
    if (evento.keyCode == lobo.RIGHT)
    {
      if(ylobo<190)
      {
        ylobo = ylobo+mov;
        xlobo = xlobo-mov;
        dibujar();
      }
      elseif (ylobo>=190 && ylobo<410)
      {
        ylobo = ylobo+mov;
        xlobo = xlobo+mov;
        dibujar();
      }
      elseif(ylobo>=410 && xlobo<=420)
      {
        xlobo = xlobo+(mov+3);
        ylobo = 411;
        dibujar();
      }
    }
    if (evento.keyCode == lobo.LEFT)
    {
      ylobo = ylobo+mov;
      xlobo = xlobo+(mov-1);
      dibujar();

      if(ylobo>=410 && xlobo<=420)
      {
        xlobo = xlobo+(mov+3);
        ylobo = 411;
        dibujar();
      }
    }
    if (evento.keyCode == lobo.UP)
    {
      ylobo = ylobo+(mov+3);
      xlobo = xlobo+mov;
      dibujar();

      if(ylobo>=410 && xlobo<=420)
      {
        xlobo = xlobo+(mov+3);
        ylobo = 411;
        dibujar();
      }
    }
    if (evento.keyCode == lobo.DOWN)
    {
      xlobo = xlobo+(mov-3);
      ylobo = ylobo+mov;
      dibujar();

      if(ylobo>=410 && xlobo<=420)
      {
        xlobo = xlobo+(mov+3);
        ylobo = 411;
        dibujar();
      }
    }
    if(xlobo>=420)
    {
      xlobo = 420;
      ylobo = 410;
      console.log("perdiste");

      dibujarLinea("red", 1, 1, 499, 499, papel, 15);
      dibujarLinea("red", 1, 499, 499, 1, papel, 15);
      alert("TE TARDASTE, ESOS CERDITOS YA SON TOCINO CRUJIENTE :c");
    }
  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo, grueso)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grueso;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}