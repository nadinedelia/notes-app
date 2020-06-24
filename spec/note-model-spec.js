// function testNoteStoresNote() {
// var Note = new Note();
//   // it 'adds a new note to the note app'
//   Note.addNote('My favourite language is JavaScript')
//   expect(Note.text[0]).toBeEqual 'My favourite language is JavaScript'
// }
//

function testNoteStoresNote() {
  var note = new Note('My favourite language is JavaScript');
  assert.isTrue(note.getText() === 'My favourite language is JavaScript');
};

function testNoteListStoresNote() {
  var noteList = new NoteList();
  noteList.addNote("note 1")
  noteList.addNote("note 2")
  assert.isTrue(noteList.getNotes()[0].text === "note 1");
  assert.isTrue(noteList.getNotes()[1].text === "note 2");
};

function testNoteListStoresNoteListModel() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")

  assert.isTrue(noteList.getNotes()[0].getText() === "Favourite drink: seltzer")
}

function testNoteListViewOutputsHTML() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayView() === '<ul><li><div>Favourite drink: seltzer</div></li></ul>')
}
function testNoteListViewOutputsHTML0note() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayView() === '')
}
function testNoteListViewOutputsHTMLmanynote() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")
  noteList.addNote("eeck, need a test")
  var noteListView = new NoteListView(noteList);
  var string = '<ul><li><div>Favourite drink: seltzer</div></li></ul><ul><li><div>eeck, need a test</div></li></ul>'
  assert.isTrue(noteListView.displayView() === string)
}


testNoteStoresNote();
testNoteListStoresNote();
testNoteListStoresNoteListModel();
testNoteListViewOutputsHTML();
testNoteListViewOutputsHTML0note();
testNoteListViewOutputsHTMLmanynote();
