let peso=parseFloat(prompt(`digite seu peso em kg`))
let altura=parseFloat(prompt(`Digite sua altura em metros`))
let imc=peso/Math.pow(altura,2)
if(imc<18.5){
   alert(`Você está abaixo do peso!`)

}else if(imc>=18.5 && imc<25){
   
    alert(`Você está com o peso normal!`)
} 
else if(imc>=25 && imc<=30){
  
    alert(`Você está acima do peso!`)
}
else {
    alert(`Você está obeso(a)!`)
}
    