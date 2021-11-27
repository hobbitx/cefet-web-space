// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let lstTxtExpandir = document.querySelectorAll(".botao-expandir-retrair");

function expande(el) {
    el.addEventListener('click', function(e) { 
        let elemento = e.currentTarget;
        let pExpande = elemento.parentNode;
        pExpande.classList.toggle('expandido');
        elemento.innerHTML = (pExpande.classList.value=='expandido') ? '-': '+';
    });
};

lstTxtExpandir.forEach(expande); 