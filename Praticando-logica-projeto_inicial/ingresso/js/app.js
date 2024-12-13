
function comprar() {
    //recuperar valores tipo de ingresso, quantidade
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

     // Mapeamento de tipo de ingresso para funções
     let acoes = {
        pista: comprarPista,
        superior: compraSuperior,
        inferior: compraInferior
    };

    // Verificar e executar a função correspondente
    let acao = acoes[tipoIngresso];
    if (acao) {
        acao(qtd);
    } else {
        alert('Tipo de ingresso inválido.');
    }

    console.log(tipoIngresso);
    console.log(qtd);
   
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function compraSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo Superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function compraInferior(qtd){
    let qutInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qutInferior) {
        alert('Quantidade indisponível para tipo Inferior');
    } else {
        qutInferior = qutInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qutInferior;
        alert('Compra realizada com sucesso!');
    }
}