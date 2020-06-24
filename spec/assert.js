var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Nah, mate. " + assertionToCheck + " isn't working.");
    }
    else {
      console.log('YEAH BABY IT WORKS!!')
    }
  }
};
