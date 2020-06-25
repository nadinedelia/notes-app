(function (exports) {
  function NoteController(noteList) {
    this.noteList = new NoteList();
    this.noteList.addNote('Beer n Wine n BBQ n sun n fun');
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
  // console.log(controller.noteList.getNotes());

  window.addEventListener('hashchange', function () {
    var id = window.location.hash.slice('#')[6];
    var object = controller.noteList.getNotes()[id];
    var singleNoteView = new SingleNote(object);
    document.getElementById('app').innerHTML = singleNoteView.getHtml();
  });

  document.getElementById('text').addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event)
  })

});
