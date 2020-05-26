var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

console.log(teclas)

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
	if(evento.keyCode == teclas.UP)
	{
		console.log("vamos pa riba")
	}

	if(evento.keyCode == teclas.DOWN)
	{
		console.log("vamos pa bajo")
	}

}
