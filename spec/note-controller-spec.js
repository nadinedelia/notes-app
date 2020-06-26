function noteControllerInstantiated() {
  var noteList = new NoteList()
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController);
};


// MOCKING
(function(exports) {
  function NoteListView() {
  }
  NoteListView.prototype.displayView = function() {
    return "<ul><li><a href=\"#note/0\"><div>it's friday yeah!</div></li></ul>"
  }
  exports.NoteListView = NoteListView
})(this);
// MOCKING OVER


function noteControllerOutput() {
  var noteList = new NoteList()
  noteList.addNote("it's friday yeah!")
  var noteController = new NoteController(noteList);
  noteController.displayHtml()
  var string = "<ul><li><a href=\"#note/0\"><div>it's friday yeah!</div></a></li></ul>"
  assert.isTrue(document.getElementById("app").innerHTML === string);
};
//
// function hashChangeEvents() {
//
// }

noteControllerInstantiated();
noteControllerOutput();
