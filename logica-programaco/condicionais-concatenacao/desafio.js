// Pergunte ao usuário qual é o dia da semana. 
let diaDaSemana = prompt("Qual é o dia da semana?");
//Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
if(diaDaSemana == "Sábado" || diaDaSemana == "Domingo"){
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Digite um número");
if(numero > 0){
  alert("Este número é positivo");
} else if	(numero < 0){
  alert("Este número é negativo");
} else {
  alert("Este número é zero");
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt("Digite sua pontuação: ");
if(pontuacao >= 100){
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}
// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 500;
alert(`Seu saldo é de ${saldo}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Digite seu nome");
alert(`Boas-vindas ${nome}`);