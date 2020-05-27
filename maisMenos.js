function maisMenos(array){
    var novo = [];
    var positivo = 0;
    var negativo = 0
    var zeros = 0;
    var total = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] > 0){
            positivo++;
        }else if(array[i] < 0){
            negativo++;
        }else{
            zeros++;
        }
        total++;
    }
    novo[0] = ((positivo/total)*100)/100;
    novo[1] = ((zeros/total)*100)/100;
    novo[2] = ((negativo/total)*100)/100;
    return novo;
}
