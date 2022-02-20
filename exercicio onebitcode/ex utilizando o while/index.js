let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Você quer que a nave faça uma dobra?\n\n1- sim\n2- Não?")

while(chosenOption == "1"){
    warpCount +=1
    chosenOption = prompt("quer fazer outra dobra?\n\n1- sim\n2- não")
}

alert("A nave " + spaceship + " realizou " + warpCount + " dobras.")