// Obtendo os elementos Globais
let listaProdutos = document.getElementById("lista-produtos"); // Pegando os elementos da lista
let totalCompra = 0;
let selecionarProduto = document.getElementById("produto");
let valorTotal = document.getElementById("valor-total");

function adicionar(){
    
    //let carrinhoProduto = document.getElementById('lista-produtos');
    let produtoClicado = document.getElementById('produto'); // // Obtenha o elemento pelo ID
    let produtoSelecionado = produtoClicado.value; // Obtém o produto selecionado
    let quantidade = document.getElementById('quantidade').value;
   

    quantidade = Number(quantidade);
    
     if(!quantidade || quantidade <= 0){
         alert(`É obrigatorio selecionar a quantidade de produtos: ${quantidade}`)
         return
     }
    
     // Cria um novo elemento para o produto
     let novoProduto = document.createElement("section");
     novoProduto.classList.add("carrinho__produtos__produto");
     

     // Divide o valor em nome e preço
     const [nomeProduto, precoProduto] = produtoSelecionado.split(" - ");

     // Define o conteúdo do novo produto
     novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${precoProduto}</span>`;
    
     // Adiciona o novo produto à lista
     listaProdutos.appendChild(novoProduto);

     console.log(`Produto adicionado: ${produtoSelecionado}`);
    
    // Atualiza o total da compra
    totalCompra += precoProduto;
    atualizarTotal();
    console.log(`Produto adicionado: ${produtoSelecionado}, Preço: R$${precoProduto}`);
  
}


function limpar(){
    

    if (!listaProdutos) {
        console.error("Elemento 'lista-produtos' não encontrado.");
        return;
      }
    
      // Limpe o conteúdo do carrinho
      listaProdutos.innerHTML = "";
      totalCompra = 0;
      atualizarTotal();
}

function atualizarTotal() {
    valorTotal.textContent = `R$${totalCompra}`;
  }