let listaAmigos = [];

function adicionar(){
    //Adicionar amigos na lita
    let nomeAmigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    //verificando se o campo está vazio
    if(nomeAmigo.value == ''){
        alert('Nao pode adicionar um valor vazio!')
        return;
    }
    //verificar se ja tem o nome na lista
    else if(listaAmigos.includes(nomeAmigo.value)){
        alert('Esse nome ja foi adicionado!');
        return;

    }
    else
    {
        //Adicionando um amigo na lista
        listaAmigos.push(nomeAmigo.value);
        if(lista.textContent == ''){
            lista.textContent = nomeAmigo.value;
        } else{
            lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
        }
        alert('Passou')
    }
    
    
    nomeAmigo.value = '';

  
}

function sortear(){

    // verifica se tem 4 elementos no sorteio
   if(listaAmigos.length < 4){
    alert('Adicione mais participantes ao sorteio!');
    return;
   }
   else{
    embaralha(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');
    //Percorre a lista 
    for(i = 0; i < listaAmigos.length; i++){
        //
        if(i == listaAmigos.length -1){
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[0] + '<br/>';
        }
        else{
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[i + 1] + '<br/>';
        }
        
    }
   }

   

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

    alert('Reiniciou');
}