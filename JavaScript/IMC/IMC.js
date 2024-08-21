//Exercício IMC
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18,5) {
        return nivel[1];
    }

    if (imc < 18,5) {
        return nivel[0];
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (className){
    const p = document.createElement('p');
    return p;
}
    

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resul');
    resultado.innerHTML = '';

    if(isValid) {
        p.classList.add('result');
    } else {
        p.classList.add('bad');
    }

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}; 