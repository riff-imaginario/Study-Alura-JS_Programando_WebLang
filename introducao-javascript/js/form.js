var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function() {
    event.preventDefault()  // Previne que página seja recarregada quando o botão for clicado
    
    var form = document.querySelector('#form-adiciona')  // Seleciona form para pegar dados

    // Pegando valores dos 'names' de cada 'input' no form
    var nome    = form.nome.value
    var peso    = form.peso.value
    var altura  = form.altura.value
    var gordura = form.gordura.value

    var pacienteTr = document.createElement('tr')  // Cria tag table row

    // Cria tag table data para cada atributo da tabela 
    var nomeTd    = document.createElement('td')
    var pesoTd    = document.createElement('td')
    var alturaTd  = document.createElement('td')
    var gorduraTd = document.createElement('td')
    var imcTd     = document.createElement('td')

    // Preenche campos que serão usados na tabela
    nomeTd.textContent    = nome
    pesoTd.textContent    = peso
    alturaTd.textContent  = altura
    gorduraTd.textContent = gordura
    imcTd.textContent     = calculaIMC(peso, altura)  // Reaproveitamento da função feita em calcula-imc.js

    // Adiciona campos a table row da tabela
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    var tabela = document.querySelector('#tabela-pacientes') // Seleciona tabela de pacientes

    tabela.appendChild(pacienteTr)  // adiciona paciente à tabela
})