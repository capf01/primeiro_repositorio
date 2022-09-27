let n=parseInt(prompt(`digite um valor`))
let fat=1
for(i=n;i>1;i--){
    fat=fat*i
}
alert(`o fatorial de ${n}!=${fat}`)