
(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList)
  };

  NoteController.prototype.displayHtml = function() {
    document.getElementById("app").innerHTML = this.noteListView.displayView();
  };

  exports.NoteController = NoteController;
})(this);
