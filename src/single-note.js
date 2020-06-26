// single note view constructor takes a note model as a parameter
(function(exports){
  function SingleNote(note) {
    this.note = note;
  }

// returns a string of HTML that represents the note model
  SingleNote.prototype.getHtml = function() {
    return '<div>' + this.note.getText() + '</div>';
  };

  exports.SingleNote = SingleNote
})(this);
