let soma=0
let qtdProdutos=parseInt(prompt(`digite a quantidade de produtos`))
let precosProdutos=[]
let maior=0
let menor=0
for(let i=0; i<qtdProdutos; i++){
precosProdutos[i]=parseFloat(prompt(`digite o valor`))
if(maior<preco){
    maior=precosProdutos
}
}
for(let preco of precosProdutos){
    soma+=preco
    

}
alert(`o valor e ${soma}`)
alert(`o maior é ${maior}`)