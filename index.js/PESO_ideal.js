let Sexo=prompt(`Masculino ou Feminino?
M-Masculino
F-Feminino`)
let altura=parseFloat(prompt(`Digite sua altura em metros`))

if(Sexo==`M`){
   let pesoideal=(72.7*altura)-58
   alert(`Seu peso ideal é ${pesoideal.toFixed(2)}}kg`)

}else if(Sexo==`F`){
    let pesoideal=(62.1*altura)-44.7
    alert(`Seu peso ideal é ${pesoideal.toFixed(2)}}kg`)
}