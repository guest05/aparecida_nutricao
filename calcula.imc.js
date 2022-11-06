var titulo = document.querySelector(".titulo");
	titulo.textContent = "Medic IMC Pacient";

var pacientes = document.querySelectorAll(".paciente");
	(var i = 0; i < pacientes.length; i++){
		var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info_peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info_altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info_imc");

var pesoEhValido = true;
var alturaEhValido = true;

if(peso <= 0 || peso >= 1000){
	pesoEhValido = false;
	tdImc.textContent = "Peso invalido!";
};

if(altura <= 0 || altura >= 3){
	alturaEhValido = false;
	tdImc.textContent = "Altura invalida!";
	paciente.classList.add("paciente_invalido");
};

if(pesoEhValido && alturaEhValido){
	var imc = calculaImc(peso, altura);
	tdImc.textContent = imc;
}else{
	tdImc.textContent = "Altura e/ou peso invalido(s)!";
}
};

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura*altura);
	return imc.toFixed(2);
};