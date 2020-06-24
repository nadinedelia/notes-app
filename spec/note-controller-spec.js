function noteControllerInstantiated() {
  var noteList = new NoteList
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController);
};

function noteControllerOutput() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")
  var noteController = new NoteController(noteList);
  noteController.displayHtml()
  var string = '<ul><li><div>Favourite drink: seltzer</div></li></ul>'
  assert.isTrue(document.getElementById("app").innerHTML = string);
};


noteControllerInstantiated();
noteControllerOutput();
