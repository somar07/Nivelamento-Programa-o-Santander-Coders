function acontece(horarios,minimo){
    var cont = 0;
    for(var i = 0; i < horarios.length; i++){
        if(horarios[i] < 1){
            cont++;
        }
    }
    return cont >= minimo;
}

function aberturas(dias, min){
    var array = [];
    for(var i = 0; i < dias.length; i++){
        for(var j = 0; j < dias[i].length; j++){
            array[i] = acontece(dias[i],min);
        }
    }
    return array;
}
