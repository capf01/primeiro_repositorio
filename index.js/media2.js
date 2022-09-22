let numero=parseInt(prompt("Qual a quantidade de numeros")) 
let cont=0
let soma=0
let media=0
    while(cont<numero){    
       let x=parseFloat(prompt(`digite um numero`))
       cont++  
       soma=x+soma
       media=soma/numero
         
         
      }
      alert(`a media e:${media}`)