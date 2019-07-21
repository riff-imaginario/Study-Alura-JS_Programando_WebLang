// Código acionado ao clicar no botão "Adicionar"
var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function() {
    event.preventDefault()  // Previne que página seja recarregada quando o botão for clicado
    
    var form       = document.querySelector('#form-adiciona')  // Seleciona form para pegar dados
    var paciente   = obtemPacienteDoFormulario(form)  // Atribui a paciente, o retorno da função

    pacienteTr = montaTr(paciente)
    
    var tabela = document.querySelector('#tabela-pacientes') // Seleciona tabela de pacientes

    tabela.appendChild(pacienteTr)  // adiciona paciente à tabela
})


// Função para obter dados do paciente
function obtemPacienteDoFormulario(form) {

    // Cria objeto paciente com valores dos 'names' de cada 'input' no form 
    var paciente = {
        nome    : form.nome.value,
        peso    : form.peso.value,
        altura  : form.altura.value,
        gordura : form.gordura.value,
        imc     : calculaIMC(form.peso.value, form.altura.value)  // Reaproveitamento da função feita em calcula-imc.js
    }

    return paciente
}


// Monta linha da tabela com novo paciente
function montaTr(paciente) {
    var pacienteTr = document.createElement('tr')  // Cria tag table row
    pacienteTr.classList.add('paciente')  // Cria .paciente na tr

    // Adiciona campos (tags td) na table row da tabela
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}


// Cria tag td com dados que a tag irá guardar e uma classe
function montaTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}