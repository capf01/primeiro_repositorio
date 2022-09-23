let numero=[]
numero[0]=parseInt(prompt(`digite um valor`))
for (let i=0; i<5 ; i++){
    
numero[i+1]=parseInt(prompt(`digite um valor`))
while(numero[i]==numero[i+1]){
    numero[i+1]=parseInt(prompt(`digite um valor diferente`))
    alert(`iguais`)
}

}
for(let i=0; i<5 ; i++){
    alert(`numero ${i} = ${numero[i]}`)
}
