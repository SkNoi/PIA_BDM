
function iniciosession(){

    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;

    if(usuario === "" || pass === ""){

        alert("Favor de llenar los campos");

        return false;
        
    } else{

        window.location.href = "main.html";
        return false;

	}

}