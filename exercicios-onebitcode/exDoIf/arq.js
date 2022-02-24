velocity = 0
name = prompt("Qual o nome do piloto?")
velocity = prompt("A que velocidade gostaria de acelerar a nave?")
confirm("Confirma que você está indo para a velocidade " + velocity + " km/s?")

if(velocity <= 0){
    alert("Nave parada")}
    else if( velocity < 40){
        alert("vc está devagar")
    }
    else if(velocity >=40 && velocity < 80){
        alert("Boa velocidade para manter")
    }
    else if(velocity >= 80 && velocity < 100){
        alert("Velocidade alta, diminua")
    }
    else if(velocity >= 100){
        alert("Velocidade perigosa, controle automatico forçado")
    }

alert("O piloto " + name + " está a "+ velocity + " km/s.")
