var doses = 0
var name = ""
op = ""

name = prompt("Qual o seu nome?")
op = prompt("Quer uma dose?\n\n1 - sim\n2 - não")

while(op == "1"){
    doses +=1
    op = prompt("Quer mais uma dose?\n\n1 - sim\n2 - não")

}
alert(name + ", você bebeu " + doses + "doses")