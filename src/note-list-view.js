// Takes a note list model upon instantiation

(function(exports) {
  function HtmlView(noteList) {
    this.noteList = noteList;
  };

  HtmlView.prototype.displayView = function() {
    // if (this.noteList.Note == null) {
    //   return null;
    // } else {
      var notearray = this.noteList.getNotes();
      output = ''
      notearray.forEach (function(note) { output += `<ul><li><div>${note.getText()}</div></li></ul>` })
      return output
  };

  exports.HtmlView = HtmlView;
})(this);
