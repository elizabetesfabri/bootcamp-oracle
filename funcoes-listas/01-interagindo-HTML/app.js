let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10';

function verificarChute() {
    let chute = document.querySelector('input').value
    let numeroSecreto = 5
    if (chute == numeroSecreto) {
        paragrafo.innerHTML = 'Acertou'
    } else {
        paragrafo.innerHTML = 'Errou'
    }
}

