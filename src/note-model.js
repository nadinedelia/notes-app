(function(exports) {
  function Note(string) {
    // if (typeof noteNumber === 'undefined') {noteNumber = 0} !How to set as 0 at the start of the run!
    this.text = string;
    // this.id = noteNumber;
    // noteNumber ++;
  };

  Note.prototype.getText = function() {
    return this.text;
  };

  Note.prototype.getID = function() {
    return "not done";
  };

  exports.Note = Note;
  // exports.noteNumber = noteNumber !How to update the noteNumber!
})(this);
