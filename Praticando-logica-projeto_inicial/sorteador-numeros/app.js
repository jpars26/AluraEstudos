

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numeroAleatorio;

      
    if (de >= ate) {
        alert(`Campo "Do número" : ${de} deve ser inferior ao campo "Do número" : ${ate}. Verifique!`);
        return;
      }
    
    
    if (quantidade > (ate - de + 1)) {
        alert(`Campo "Quantidade" ${quantidade} deve ser menor ou igual ao intervalo informado no campo "Do número": ${de} até o campo "Até o número": ${ate}. Verifique!`);
        return;
      }

    for(let i = 0; i < quantidade; i++){

        numeroAleatorio = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numeroAleatorio)){
            numeroAleatorio = obterNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numeroAleatorio)
    
    }
    
    let  resultado =  document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    document.getElementById('btn-reiniciar').removeAttribute('disabled');  
           
       
        
    
}

function obterNumeroAleatorio(min, max){

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min

}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    location.reload();
}