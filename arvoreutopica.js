function alturaArvoreUtopica(n){
    var altura = 1;
    for (var i = 1; i <= n; i++){
        if(i%2 == 0){
            altura+=1;
        }else{
            altura*=2;
        }
    }
    return altura;
}
