var pacientes = document.querySelectorAll('.paciente')

for (var i=0; i < pacientes.length; i++) {
    var paciente = pacientes[i]
    
    var tdPeso = paciente.querySelector('.info-peso')
    var peso   = tdPeso.textContent

    var tdAltura = paciente.querySelector('.info-altura')
    var altura   = tdAltura.textContent

    var tdIMC = paciente.querySelector('.info-imc')

    var pesoValido   = validaPeso(peso)
    var alturaValida = validaAltura(altura)

    // Se peso for invalido, mostre mensagem apresentando isso
    if (!pesoValido) {
        tdIMC.textContent = 'Peso inválido!'
        paciente.classList.add('paciente-invalido')
    }

    // Se altura for invalida, mostre mensagem apresentando isso
    if (!alturaValida) {
        tdIMC.textContent = 'Altura inválida!'
        paciente.classList.add('paciente-invalido')
    }

    if (alturaValida && pesoValido) {
        var imc = calculaIMC(peso, altura)
        tdIMC.textContent = imc
    }
}


// Valida peso de acordo com limites
function validaPeso(peso) {
    if (peso >= 0 && peso < 1000)
        return true
    return false
}


// Valida altura de acordo com limites
function validaAltura(altura) {
    if(altura >= 0 && altura <= 3)
        return true
    return false
}


function calculaIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2)
}