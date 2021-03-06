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
      // getNote is method in NoteList to get notes from array
      var object = controller.noteList.getNotes()[id];
  
      var singleNoteView = new SingleNote(object);
      // singleNoteView now basically had everything in it that we need
      // getHtml is method that renders single note HTML without shortening
      document.getElementById('app').innerHTML = singleNoteView.getHtml();
    });
  
  
  // stops the form being submitted when a submit event is triggered.
    document.getElementById('text').addEventListener('submit', function(event){
    event.preventDefault();
    var textArea = document.getElementById('text').elements[0].value;
    controller.noteList.addNote(textArea);
    controller.displayHtml();
    })
  
  });