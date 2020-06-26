function testNoteListViewOutputsHTML() {
  var noteList = new NoteList();
  noteList.addNote("it's friday yeah!")
  var noteListView = new NoteListView(noteList);
  var string = "<ul><li><a href=\'#note/0\'><div>it's friday yeah!</div></li></ul>"
  assert.isTrue(noteListView.displayView() === string)
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
  var string = `<ul><li><a href=\'#note/0\'><div>${text1}</div></li><li><a href=\'#note/1\'><div>${text2}</div></li></ul>`
  assert.isTrue(noteListView.displayView() === string,"html disp. many notes")
}


testNoteListViewOutputsHTML();
testNoteListViewOutputsHTML0note();
testNoteListViewOutputsHTMLmanynote();
