
(function(exports) {
  function NoteController(noteList) {
    noteList.addNote('Favourite drink: seltzer')
    this.noteListView = new NoteListView(noteList)
  };

  NoteController.prototype.displayHtml = function() {
    document.getElementById("app").innerHTML = this.noteListView.displayView();
  };

  exports.NoteController = NoteController;
})(this);
noteController = new NoteController(noteList = new NoteList)
noteController.displayHtml()
