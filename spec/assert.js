var assert = {
  isTrue: function(assertionToCheck, number) {
    if (!assertionToCheck) {
      throw new Error("Nah, mate. Sorry, it's " + assertionToCheck + ". \n Test not working. \n \n" + number);
    }
    else {
      console.log('YEAH BABY IT WORKS!!', number)
    }
  }
};
