let par
let impar
numero=[]
contpar=0
contimpar=0
for(let i=0; i<6; i++){
    numero [i]=parseInt(prompt(`digite um valor`))
    if (numero[i]%2==0){
        contpar++
        alert(`${numero[i]} é par`)
    }
    if (numero[i]%2!=0){
        contimpar++
        alert(`${numero[i]} é impar`)
    }
    
}
alert(`${contpar} pares`)
alert(`${contimpar} impares`)