let TipoCombustivel=prompt(`Álcool ou Gasolina?
A-Álcool
G-Gasolina`)
let Litros=parseFloat(prompt(`Quantidade de Litros`))
let valor

if(TipoCombustivel==`A`){
    if(Litros<=25){
        valor=Litros*1.90
        let desconto=valor+valor*0.02
        alert(`o valor e: 
R$${valor.toFixed(2)} com desconte de:
R$${desconto.toFixed(2)}`)

    }else if(Litros>=25){
        valor=Litros*1.90
        let desconto=valor-valor*0.04
        alert(`o valor e: 
R$${valor.toFixed(2)}`)
    }
   
}else if(TipoCombustivel==`G`){
    if(Litros<=25){
        valor=Litros*2.70
        let desconto=valor-valor*0.03
        alert(`o valor e: 
R$${valor.toFixed(2)}}`)

    }else if(Litros>=25){
        valor=Litros*2.70
        let desconto=valor-valor*0.05
        alert(`o valor e: 
R$${valor.toFixed(2)} `)
    } 
}