const num = Number(prompt('Digite um número'));
const numTit = document.getElementById('num');
const texto = document.getElementById('texto');

numTit.innerHTML = num;
numTit.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`
texto.innerHTML += `<p>com duas casas decimais: ${(num.toFixed(2))}</p>`
