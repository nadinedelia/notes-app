
(function(exports) {
  function NoteController(noteList) {
    this.noteList = new NoteList
    this.noteList.addNote('Beer n Wine n BBQ')
    console.log(this.noteList.notesArray)
    this.noteListView = new NoteListView(noteList)
  };

  NoteController.prototype.displayHtml = function() {
    document.getElementById("app").innerHTML = this.noteListView.displayView();
  };

  exports.NoteController = NoteController;
})(this);

window.addEventListener(‘DOMContentLoaded’, function (event) {
  noteList = new NoteList
  noteList.addNote('Beer n Wine n BBQ')
  noteListView = new NoteListView(noteList)
  console.log(noteListView)
  document.getElementById("app").innerHTML = noteListView.displayView();

});
