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
  // console.log(noteList.getNotes()[0].text)
  assert.isTrue(noteList.getNotes()[0].text === "note 1");
  assert.isTrue(noteList.getNotes()[1].text === "note 2");
};

function testNoteListStoresNoteListModel() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")

  assert.isTrue(noteList.getNotes()[0].getText() === "Favourite drink: seltzer")
}

function testHtmlViewOutputsHTML() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")
  var htmlView = new HtmlView(noteList);

  // var noteList2 = new NoteList();
  // var modelHtml2 = new HtmlView(noteList2);
  assert.isTrue(htmlView.displayView() === '<ul><li><div>Favourite drink: seltzer</div></li></ul>')
  // assert.isTrue(htmlView2.displayView() === null)
}

testNoteStoresNote();
testNoteListStoresNote();
testNoteListStoresNoteListModel();
testHtmlViewOutputsHTML();
