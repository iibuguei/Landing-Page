// Minha humilde versão

const nomeA = prompt('Digite seu nome completo:');
const tamNome = nomeA.length;
const segLetra = nomeA.charAt(1);
const indLet = nomeA.indexOf('S');
const ultIndLet = nomeA.lastIndexOf('n');
const Ult3Let = nomeA.slice(-3);
const palav = nomeA.split(' ');
const Maius = nomeA.toUpperCase();
const Minus = nomeA.toLowerCase();

document.body.innerHTML += `Seu nome é: ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem ${tamNome} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segLetra} <br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra S no seu nome? ${indLet} <br/>`;
document.body.innerHTML += `Qual o último índice da letra N no seu nome? ${ultIndLet} <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${Ult3Let} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${palav} <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${Maius} <br/>`;"'"
document.body.innerHTML += `Seu nome com letras minúsculas: ${Minus} <br/>`;

// Versão do Luiz 

const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `Seu nome é: ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra S no seu nome? ${nome.indexOf('s')} <br/>`;
document.body.innerHTML += `Qual o último índice da letra N no seu nome? ${nome.lastIndexOf('n')} <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3, nome.length)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase} <br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase} <br/>`;