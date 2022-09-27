let ano=parseInt(prompt(`Verificar se um ano é bissexto`))
if((ano%400 == 0) || (ano%4==0 && ano%100!=0)){
    alert(`Ano bissexto`)
}
else {
    alert(`Não é bissexto`)
}