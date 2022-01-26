
//funciones para los botones

   function encriptador()
 {

 	 var texto = document.getElementById("input-text").value;
    document.getElementById("msg").value = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return texto;

 }



 	function desencriptar() {
    var texto= document.getElementById("input-text").value;
    document.getElementById("msg"). value =texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

	}

	function copiar(){
		const copyText = document.getElementById("msg");
		copyText.select();
		navigator.clipboard.writeText(copyText.value);
	}

	
	function borrar(){
		document.getElementById("input-text").value = "";
		document.getElementById("msg").value = "";
		
	}


function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta letras minusculas de la a-z
    patron = /[a-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


	