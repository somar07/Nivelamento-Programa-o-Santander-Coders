function escada(altura){
	var arvore = [];
  for(var i = 1; i <= altura; i++){
		arvore.push(' '.repeat(altura-i)+'#'.repeat(i));
  }
  return arvore;
}
