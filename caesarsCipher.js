exports.caesarize = (strToCaesarize, shiftNumber) => {
  shiftNumber = Number(shiftNumber);
  if (isNaN(shiftNumber)) {
    throw new TypeError('second input to "caesarize it" must be a number');
  }
  const letter = 'abcdefghijklmnopqrstuvwxyz';
  const upperLetter = letter.toUpperCase();
  const letters = /^[a-z]/g;
  const upperLetters = /^[A-Z]/g;
  const symbol = '#@&^*( !';
  const letterArray = Array.from(strToCaesarize);
  const result = [];
  letterArray.forEach(x => {
    if (x.match(letters)) {
      let indexInputLetter = letter.indexOf(x);

      if (shiftNumber < 0) {
        shiftNumber += 26;
      }
      let expectedIndexLetter = indexInputLetter + shiftNumber;
      if (expectedIndexLetter > 25) {
        expectedIndexLetter -= 26;
      }
      let expectedLetter = letter.charAt(expectedIndexLetter);
      return result.push(expectedLetter);
    } else if (x.match(upperLetters)) {
      if (shiftNumber < 0) {
        shiftNumber += 26;
      }
      let indexInputUpperLetter = upperLetter.indexOf(x);
      let expectedIndexLetter = indexInputUpperLetter + shiftNumber;
      if (expectedIndexLetter > 25) {
        expectedIndexLetter -= 26;
      }
      let expectedLetter = upperLetter.charAt(expectedIndexLetter);
      return result.push(expectedLetter);
    } else {
      let indexSymbolInput = symbol.indexOf(x);
      let expectedSymbol = symbol.charAt(indexSymbolInput);
      return result.push(expectedSymbol);
    }
  });
  return result.join('');
};
