// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let btnCalcular = document.querySelector('#calcular');

btnCalcular.addEventListener('click', function() {
    let massa1 = document.querySelector('#massa1');
    let massa2 = document.querySelector('#massa2');
    let distancia = document.querySelector('#distancia');
    let constante = document.querySelector('#constante');
    let resultado = document.querySelector('#resultado');

    resultado.value = ((constante.value*massa1.value*massa2.value)/(distancia.value**2)).toPrecision(4);
}); 