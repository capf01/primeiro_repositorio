let media=0
let soma=0
let numero=parseFloat(prompt(`digite a quantindade de numeros`))
for(let i=1;i<=numero;i++){
    valor=parseFloat(prompt(`digite um valor`))
    soma=valor+soma
    media=soma/numero
}
alert(`a media =${media}`)