const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelector('p');

const estiloBody = getComputedStyle(document.body);
const backgroudColorBody = estiloBody.backgroundColor;
console.log(backgroudColorBody);

for (let p of ps) {
    console.log(p);
}