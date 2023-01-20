module.exports = function check(str, bracketsConfig) {
  if (str.length === 0){
    return false;
  }

  let bracket = [];
  let inArrStr = [];

  bracketsConfig.forEach(element => {
     element.forEach(element => {
      bracket.push(element);
     }) 
  });

  let arrStr = str.split('');

  arrStr.forEach(element => {
      inArrStr.push(element);
      
  })
  
  let result = bracket.filter(item => !inArrStr.includes(item));
  
  if (result == 0){
      return true
  }else{
      return false
    }
  
}
