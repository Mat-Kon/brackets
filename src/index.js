module.exports = function check(str, bracketsConfig) {
  if (str.length === 0){
    return false;
  }

  let bracket = bracketsConfig.join('');
  
  let a = '';
  let b ='';

  for (let i = 0; i < str.length; i++){
    a = str[i];

    for(let j = 0; j < bracket.length; j++){
      b = bracket[j];
    }

    if (a === b) {
      return true
    }else{
      return false
    }
        
  }




  
}
