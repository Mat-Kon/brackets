module.exports = function check(str, bracketsConfig) {     
   const stack = [];
  
    
   for (let i = 0; i < str.length; i++) {
      const stack = [];

      for (let i = 0; i < str.length; i++) {
        let symbol = str[i];
    
        for (let brackets of bracketsConfig) {
            const openBracket = brackets[0];
            const closeBracket = brackets[1];
    
            const canPush = openBracket !== closeBracket || openBracket === closeBracket && !stack.includes(openBracket)
    
            if (symbol === openBracket && canPush) {
                stack.push(symbol);
                break;
            }
    
            if (symbol === closeBracket && stack.pop() !== openBracket) {
                return false
            }
        };
      }
    
      return stack.length === 0;
   }
}
   



