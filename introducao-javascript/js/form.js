// Código acionado ao clicar no botão "Adicionar"
var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function() {
    event.preventDefault()  // Previne que página seja recarregada quando o botão for clicado
    
    var form       = document.querySelector('#form-adiciona')  // Seleciona form para pegar dados
    var paciente   = obtemPacienteDoFormulario(form)  // Atribui a paciente, o retorno da função
    var pacienteTr = document.createElement('tr')  // Cria tag table row

    // Cria tag table data para cada atributo da tabela 
    var nomeTd    = document.createElement('td')
    var pesoTd    = document.createElement('td')
    var alturaTd  = document.createElement('td')
    var gorduraTd = document.createElement('td')
    var imcTd     = document.createElement('td')

    // Preenche campos que serão usados na tabela
    nomeTd.textContent    = paciente.nome
    pesoTd.textContent    = paciente.peso
    alturaTd.textContent  = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent     = paciente.imc

    // Adiciona campos a table row da tabela
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

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