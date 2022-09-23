
let somapositivo=0
numero=[]
contnegativo=0

for(let i=0; i<10; i++){
    numero [i]=parseInt(prompt(`digite um valor`))
    if (numero[i]<0){
        contnegativo++
        alert(`${numero[i]} é negativo`)
    }
    if (numero[i]>0){
        somapositivo+=numero[i]
        alert(`${numero[i]} é positivo`)
    }
    
}
alert(`o numero de número negativos é: ${contnegativo} `)
alert(`a soma dos numeros positivos e: ${somapositivo} `)