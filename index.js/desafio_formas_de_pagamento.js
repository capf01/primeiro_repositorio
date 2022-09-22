let PrecodoPrdoduto=parseFloat(prompt(`Digite o valor do produto?`))
let Menssagem=prompt(`digite 1 para dinheiro
digite 2 para cheque
digite 3 para cartão`)
if(Menssagem=="1"||Menssagem=="2"){
alert(`valor escolhido dinheiro ou cheque:`)
let desconto=PrecodoPrdoduto*0.2
let valor=PrecodoPrdoduto-desconto

alert(`o valor e: 
R$${valor.toFixed(2)} com desconte de:
R$${desconto.toFixed(2)}`)}
else if(Menssagem=="3"){
        let desconto=PrecodoPrdoduto*0.10
        let valor=PrecodoPrdoduto-desconto
        let parcela= parseInt(prompt(`Digite a quantidade de parcelas`))
    if(parcela==1){
        alert(`o valor e: 
        R$${valor.toFixed(2)} 
        com desconto de:
        R$${desconto.toFixed(2)}`)
} else if(parcela==2){
        let desconto=PrecodoPrdoduto*0.05
        let valor=PrecodoPrdoduto-desconto
        let qparcerla=(valor/parcela)
        alert(`o valor e: 
        R$${valor.toFixed(2)} 
        com desconto de:
        R$${desconto.toFixed(2)}
        com ${parcela}x com parcelas de: no valor de:
        R$${qparcerla.toFixed(2)}`)

} 
else if(parcela>=3){
    let juros=PrecodoPrdoduto*0.15
    let valor=PrecodoPrdoduto+juros
    let qparcerla=(valor/parcela)
    alert(`o valor e: 
    R$${valor.toFixed(2)} 
    com juros de:
    R$${juros.toFixed(2)}
    com ${parcela}x no valor de:
    R$${qparcerla.toFixed(2)}`)

}
    
} 


