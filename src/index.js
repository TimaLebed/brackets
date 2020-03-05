module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  const bracketsStack = [];
  const bracketsArr = str.split('');

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsArr[i] === bracketsConfig[j][1] && bracketsStack[bracketsStack.length - 1] === bracketsConfig[j][0]) {
        bracketsStack.pop();
      } else if (bracketsArr[i] === bracketsConfig[j][0]) {
        bracketsStack.push(bracketsArr[i]);
      }
    }
  }

  return bracketsStack.length === 0;
}
