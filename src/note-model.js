(function(exports) {
  function Note(string) {
    // if (typeof noteNumber === 'undefined') {noteNumber = 0}
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
  // exports.noteNumber = noteNumber
})(this);
