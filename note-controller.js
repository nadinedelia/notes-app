(function (exports) {
  function NoteController(noteList) {
    this.noteList = new NoteList();
    this.noteList.addNote('Beer n Wine n BBQ n sun n fun');
    this.noteList.addNote('Beer BBQ');


// Creates a note list view, passing in the note list model.
    console.log(this.noteList.notesArray);
    this.noteListView = new NoteListView(this.noteList);
  }


// gets HTML from the note list view and inserts it into the app element.
  NoteController.prototype.displayHtml = function () {
    document.getElementById('app').innerHTML = this.noteListView.displayView();
  };

  exports.NoteController = NoteController;
})(this);


// Add code that gets hold of the app div element in your index.html page.
window.addEventListener(`DOMContentLoaded`, function (event) {
  var noteList = new NoteList();
  var controller = new NoteController(noteList);
  document.getElementById(
    'app'
  ).innerHTML = controller.noteListView.displayView();


// listen for hashchange events
// change content of app element to be HTML for that note
  window.addEventListener('hashchange', function () {
    var id = window.location.hash.slice('#')[6];
    var object = controller.noteList.getNotes()[id];
    var singleNoteView = new SingleNote(object);
    document.getElementById('app').innerHTML = singleNoteView.getHtml();
  });

// stops the form being submitted when a submit event is triggered.
  document.getElementById('text').addEventListener('submit', function(event){
  event.preventDefault();
  console.log(document.getElementById('text').elements[0].value)
  })

});
