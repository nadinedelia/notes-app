(function (exports) {
  function NoteController(noteList) {
    this.noteList = new NoteList();

// Creates a note list view, passing in the note list model.
    this.noteListView = new NoteListView(this.noteList);
  }


// gets HTML from the note list view and inserts it into the app element.
  NoteController.prototype.displayHtml = function () {
    document.getElementById('app').innerHTML = this.noteListView.displayView();
  };

  exports.NoteController = NoteController;
})(this);

