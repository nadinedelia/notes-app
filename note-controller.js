(function (exports) {
  function NoteController(noteList) {
    this.noteList = new NoteList();
    this.noteList.addNote('Beer n Wine n BBQ');
    this.noteList.addNote('Beer BBQ');

    console.log(this.noteList.notesArray);
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.displayHtml = function () {
    document.getElementById('app').innerHTML = this.noteListView.displayView();
  };

  exports.NoteController = NoteController;
})(this);

window.addEventListener(`DOMContentLoaded`, function (event) {
  var noteList = new NoteList();
  var controller = new NoteController(noteList);
  document.getElementById(
    'app'
  ).innerHTML = controller.noteListView.displayView();
  console.log(controller.noteList.getNotes());
});
