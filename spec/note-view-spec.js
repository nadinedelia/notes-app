function testNoteListViewOutputsHTML() {
  var noteList = new NoteList();
  var controller = new NoteController(noteList);
  console.log(controller.noteListView.displayView());
  assert.isTrue(noteListView.displayView() === string1,"noteList disp. Html")
}


// Test for empty note
function testNoteListViewOutputsHTML0note() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayView() === '<ul></ul>')
}


// Test for many notes
function testNoteListViewOutputsHTMLmanynote() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")
  noteList.addNote("eeck, need a test")
  var noteListView = new NoteListView(noteList);
  var text1 = "Favourite drink: seltzer".substring(0,20);
  var text2 = "eeck, need a test".substring(0,20)
  var string2 = `<ul><li><div>${text1}</div></li><li><div>${text2}</div></li></ul>`
  assert.isTrue(noteListView.displayView() === string2,"html disp. many notes")
}


testNoteListViewOutputsHTML();
testNoteListViewOutputsHTML0note();
testNoteListViewOutputsHTMLmanynote();
