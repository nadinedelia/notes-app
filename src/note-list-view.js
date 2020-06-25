// Takes a note list model upon instantiation

(function (exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.displayView = function () {
    var notearray = this.noteList.getNotes();
    output = '<ul>';
    notearray.forEach(function (note) {
      output += `<li><a href='#note/${note.getID()}'><div>${note.getText().substring(0, 20)}</div></li>`;
    });
    output += '</ul>';
    return output;
  };

  exports.NoteListView = NoteListView;
})(this);
