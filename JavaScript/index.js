const nome = 'Ana';
const sobrenome = 'Silva';
const idade = 19;
const peso = 57;
const altura = 1.60;
let imc = peso / (altura * altura);
let anoNasc = 2024 - idade;

console.log(`Ana tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} e seu IMC é de ${imc}`);
console.log(`Ana nasceu em ${anoNasc}`);