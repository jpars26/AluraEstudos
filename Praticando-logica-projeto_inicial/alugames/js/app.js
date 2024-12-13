

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img')
    let botao = gameClicado.querySelector('.dashboard__item__button')
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
   


    if (botao.classList.contains('dashboard__item__button--return')) {
        // Retorna ao estado original
        botao.classList.remove('dashboard__item__button--return');
        botao.classList.add('dashboard__item__button');
        imagem.classList.remove('dashboard__item__img','dashboard__item__img--rented');
        imagem.classList.add('dashboard__item__img');
        botao.innerHTML = "Alugar"
        
        confirmarDevolucao();
        console.log('Estado original:', botao.className);
        
    } else {
        // Altera para o estado modificado
        botao.classList.add('dashboard__item__button','dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img','dashboard__item__img--rented');
        botao.innerHTML = "Devolver"

        
        adicionarJogo(nomeJogo.innerHTML);
        console.log('Jogo locado:', nomeJogo.innerHTML);
    
        
    }
    
   
                
}

function confirmarDevolucao(){
    let confirmacao = confirm("Tem certeza que deseja concluir a devolução?");

    if (confirmacao) {
        // Ação caso o usuário clique em "OK"
        alert("Devolução concluída!");
    } else {
        // Ação caso o usuário clique em "Cancelar"
        alert("Devolução cancelada!");
    }
}

const listaJogos = []; // Lista para armazenar os valores
const contadorJogos = {}; // Objeto para contar as ocorrências

function adicionarJogo(jogo) {
    // Adiciona o jogo à lista
    listaJogos.push(jogo);

    // Incrementa o contador para o jogo
    if (contadorJogos[jogo]) {
        contadorJogos[jogo]++;
    } else {
        contadorJogos[jogo] = 1;
    }

    console.log(`O jogo "${jogo}" foi adicionado à lista.`);
    console.log("Lista atual:", listaJogos);
    console.log("Contagem de Locaões dos jogos:", contadorJogos);
}




