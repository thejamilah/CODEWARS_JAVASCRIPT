var gimme = function (inputArray) {
  const newarray = [...inputArray];
  newarray.sort((a, b) => a - b);
  const middleNum = newarray[1];
  return inputArray.indexOf(middleNum);
 };