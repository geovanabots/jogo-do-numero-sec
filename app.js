let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}   

function exibirMsgInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto da byul');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    
}

exibirMsgInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute >numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor do que o chute.');
        }else{
            exibirTextoNaTela('p', 'O número é maior do que o chute.');
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosNaLista = listaNumerosSorteados.length;
  if(quantidadeElementosNaLista == numeroLimite){
    listaNumerosSorteados = [];
  }


  if(listaNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados)
    return numeroEscolhido;
  }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    exibirMsgInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
    
}