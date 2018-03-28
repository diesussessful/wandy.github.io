
var img;

function visualizar() {
	titulo = document.getElementById("p_titulo").value;
	categoria = document.getElementById("p_categoria").value;
	preco = document.getElementById("p_preco").value;
	info = document.getElementById("p_info").value;

	
	document.getElementById("v_preco").innerHTML = "R$" + preco;
	document.getElementById("v_info").innerHTML = info;	
	document.getElementById("v_titulo").innerHTML= titulo;
	document.getElementById("v_imagem").src = img;
	document.getElementById("v_imagem").style.width = "215px";
	document.getElementById("v_imagem").style.height = "315px";
}

function lerURL(input)
{
	var reader = new FileReader();
	reader.onload = function (e)
	{
		
		img = e.target.result;
	};
	reader.readAsDataURL(input.files[0]);
}

