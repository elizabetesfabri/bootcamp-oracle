alert('Boas vindas ao jogo de adivinhacão');

let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

//SE O CHUTE FOR IGUAL AO NUMERO SECRETO, EXIBA UM ALERTA COM A MENSAGEM "PARABÉNS! VOCÊ ACERTOU!"
if(chute == numeroSecreto) {
  //UTILIZANDO TEMPLATE STRING
  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
  alert('Você errou :(');
}

