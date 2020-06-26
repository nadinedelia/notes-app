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

testNoteListStoresNote();
testNoteListStoresNoteListModel();
