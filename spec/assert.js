var assert = {
  isTrue: function(assertionToCheck, number) {
    if (!assertionToCheck) {
      throw new Error("Nah, mate. " + assertionToCheck + " isn't working." + number);
    }
    else {
      console.log('YEAH BABY IT WORKS!!', number)
    }
  }
};
