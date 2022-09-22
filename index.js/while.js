let teste=parseFloat(prompt(`digite um valor`))
while(isNaN(teste)==true){
    alert(`digite um valor válido`)
    teste=parseFloat(prompt(`digite um valor`))

    
}
while(teste<1 || teste>3){
    alert(`maior ou igual a 1 e menor ou igual a 3`)
    teste=parseFloat(prompt(`digite um valor`))
}