/*
Queremos escrever uma função naipeDeTruco, que dado um naipe, devolva uma lista de strings, uma por cada carta desse naipe seguindo as cartas do truco:

 naipeDeTruco("espadas")
["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]

Lembre-se que as cartas de truco incluem todas as cartas numeradas de 1 a 12, com exceção das cartas 8 e 9

*/

function naipeDeTruco(naipe){
    var numeros = ["1","2","3","4","5","6","7","10","11","12"];
    var de = [" de "];
    var nova = [];
    if(naipe == "espadas"){
        for(var i = 0; i < numeros.length; i++){
	nova.push(numeros[i]+de[0]+naipe);
        }
    }if(naipe == "paus"){
        for(var i = 0; i < numeros.length; i++){
	nova.push(numeros[i]+de[0]+naipe);
        }
    }if(naipe == "ouros"){
        for(var i = 0; i < numeros.length; i++){
	nova.push(numeros[i]+de[0]+naipe);
        }
    }if(naipe == "copas"){
        for(var i = 0; i < numeros.length; i++){
	nova.push(numeros[i]+de[0]+naipe);
        }
    }
    return nova;
}
