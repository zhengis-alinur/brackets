module.exports = function check(str, bracketsConfig) {
  if((typeof str == 'undefined') || (typeof bracketsConfig == 'undefined')) {
    return false;
  }
  if (str.length % 2 != 0 || str.length == 0) {
    return false;
  }
  closeBrackets = new Array();
  openBrackets = new Array();
  for(i = 0; i < bracketsConfig.length; i++) {
    for(j = 0; j < bracketsConfig[i].length; j++) {
      if(j == 0) {
        openBrackets.push(bracketsConfig[i][j]);
      } else {
        closeBrackets.push(bracketsConfig[i][j]);
      }
    }
  }
  x = openBrackets.length*str.length/2;
  function deleteDeepestBrackets(string) {
    result = string;
    if(result.length == 0 || x == 0) {
      str = result;
      return null;
    }
    for(i = 0; i < openBrackets.length; i++) {
      let substr = openBrackets[i]+closeBrackets[i];
      let index = string.indexOf(substr);
      x--;
      if(index !== -1) {
        result = result.replace(substr, "");
      }
    }
    deleteDeepestBrackets(result);
  }
  deleteDeepestBrackets(str);
  return str.length == 0 ? true : false;
}