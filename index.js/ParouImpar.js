
let numero=[]
let numeroimpar=[]
let numeropar=[]
for(let i=0; i<6; i++){
    numero [i]=parseInt(prompt(`digite um valor`))
    if (numero[i]%2==0){
        numeropar[i]=numero[i]
    }
    if (numero[i]%2!=0){
        numeroimpar[i]=numero[i]
    }
}

alert(`numeros pares= ${numeropar} `)
alert(`numeros impares= ${numeroimpar}`)