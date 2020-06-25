(function(exports) {
  function Note(string, id = null) {
    this.text = string;
    this.id = id;
  };

  Note.prototype.getText = function() {
    return this.text;
  };

  Note.prototype.getID = function() {
    return this.id;
  };

  exports.Note = Note;
})(this);
