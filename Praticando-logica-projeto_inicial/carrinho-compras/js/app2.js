let totalCompra = 0;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    quantidade = Number(quantidade);
    
    if(!quantidade || quantidade <= 0){
        alert(`É obrigatorio selecionar a quantidade de produtos: ${quantidade}`)
        return
    }

    //calcular o preço, o nosso subtotal 
    let preco = quantidade * valorUnitario;
    //Adicionar Carrinho
    let listaProduto = document.getElementById('lista-produtos');
    //Cria uma nova seção no HTML para adicionar um produto
    let novoProduto = document.createElement("section");
    novoProduto.classList.add("carrinho__produtos__produto");

    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>`;
    listaProduto.appendChild(novoProduto);

    //atualizar o valor total
    let valorTotal = document.getElementById('valor-total');
    totalCompra += preco

    valorTotal.textContent = `R$${totalCompra}`;
    document.getElementById('quantidade').value = 0;
    }
    
    function limpar() {
        totalCompra = 0;
        document.getElementById('lista-produtos').innerHTML = '';
        document.getElementById('valor-total').textContent = 'R$ 0';
    }