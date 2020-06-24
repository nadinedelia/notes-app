// Takes a note list model upon instantiation

(function(exports) {
  function ModelView(noteListApp) {
    this.noteListApp = noteListApp;
  };

  ModelView.prototype.displayView = function() {
    // if (this.noteListApp.noteApp == null) {
    //   return null;
    // } else {
      var notearray = this.noteListApp.getNotes();
      console.log(notearray)
      var newarray = notearray.map(function(note) {
      return note.text })
      console.log(newarray)
      return `<ul><li><div>${newarray}</div></li></ul>`;
  };

  exports.ModelView = ModelView;
})(this);
