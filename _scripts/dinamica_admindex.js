var addprodut;
var user;
function admdashboard(user,addprodut) {
	
	if (addprodut) 
	{
		document.getElementById("adicionar-produto").style.display = "block";
	}else
	{
		document.getElementById("adicionar-produto").style.display = "none";
	}
}