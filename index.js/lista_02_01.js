let altura=parseFloat(prompt(`digite a altura`))
let maior=0 
let menor
let h=[]
menor=altura
for (let i=0;i<15;i++){
    if(altura>maior){
        maior=altura
        altura=parseFloat(prompt(`digite a altura`))
        alert(`a altura maior add: ${altura}`)
        h[i]=maior
    }
    if(altura<menor){
        menor=altura
        altura=parseFloat(prompt(`digite a altura`))
        alert(`a altura menor add: ${altura}`)
        h[i]=menor
    }
    }
    
alert(`o maior e: ${maior}`)
alert(`o menor e: ${menor}`)
alert(`as alturas são: ${h}`)


