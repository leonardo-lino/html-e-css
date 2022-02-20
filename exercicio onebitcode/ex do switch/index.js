let distanceInLY = prompt("Digite a distancia em anos luz: ")

let ChosenOption = prompt("Para qual unidade deseja converter?\n\n1 - Parsec(pc)\n2 - Unidade Astronomica (UA)\n3 - Quilometros (km)\n\nDigite a opção desejada: ")
let chosenUnity
let convertedDistance

switch(ChosenOption){
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilometros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não reconhecida"
        convertedDistance = "Conversão não realizada."
}
alert("Distancia em anos luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)
