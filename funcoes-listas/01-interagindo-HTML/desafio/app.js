

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
const titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarCliqueConsole(){
    console.log('O botão foi clicado 💥💥💥💥');
}
// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function verificarCliqueAlert(){
    alert('Eu amo JS');
}
// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function verificarCliquePrompt(){
    let nomeCidade = prompt('Qual é a sua cidade');
    alert(`Estive em ${nomeCidade} e lembrei de voce`);
}
// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function soma(){
    let num1 = prompt('digite um número');
    let num2 = prompt('digite outro número');
    alert(Number(num1) + Number(num2));
}