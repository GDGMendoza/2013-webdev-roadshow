'use strict';
var $tuNombre = $('#tu-nombre').on('keyup',function(){
	if($tuNombre.val()){
		$saludoContainer.html("Ola k ase " + $tuNombre.val() + "!").show();
	} else {
		$saludoContainer.hide();
	}
});
var $saludoContainer = $('#saludo-container');