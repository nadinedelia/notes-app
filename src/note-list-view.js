// Takes a note list model upon instantiation

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.displayView = function() {
    // if (this.noteList.Note == null) {
    //   return null;
    // } else {
      var notearray = this.noteList.getNotes();
      output = '<ul>'
      notearray.forEach (function(note) { output += `<li><div>${note.getText().substring(0,20)}</div></li>` })
      output += "</ul>"
      console.log(output)
      return output
  };

  exports.NoteListView = NoteListView;
})(this);
