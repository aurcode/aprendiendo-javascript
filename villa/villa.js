var z;

for(var i=0; i<50; i++)
{
	z = aleatorio(-100, 1000);
	document.write(z + ", ");
}

function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}