var botaoAdicionar = document.querySelector("#adicionar_paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	
	var form = document.querySelector("#form_adiciona");
		var paciente = obterPacienteDoFormulario(form);
		
		var pacienteTr = montaTr(paciente);
		
			//Adicionar paciente na tabela
			var tabela = document.querySelector("#tabela_pacientes");
			
			tabela.appendChild(pacienteTr);
			
			form.reset();
});

function obterPacienteDoFormulario(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value,form.altura.value),
	)
	return paciente;
};

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	
	pacienteTr.appendChild(montaTd(paciente.nome, "info_nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info_peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info_altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info_gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info_imc"));
	
	return pacienteTr;
};

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
};