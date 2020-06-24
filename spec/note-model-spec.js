// function testNoteAppStoresNote() {
// var noteapp = new Noteapp();
//   // it 'adds a new note to the note app'
//   noteapp.addNote('My favourite language is JavaScript')
//   expect(noteapp.text[0]).toBeEqual 'My favourite language is JavaScript'
// }
//

function testNoteAppStoresNote() {
  var noteApp = new NoteApp('My favourite language is JavaScript');
  assert.isTrue(noteApp.note() === 'My favourite language is JavaScript');
};

function testNoteListAppStoresNote() {
  var noteListApp = new NoteListApp();
  noteListApp.addNote("note 1")
  noteListApp.addNote("note 2")
  console.log(noteListApp.getNotes()[0].text)
  assert.isTrue(noteListApp.getNotes()[0].text === "note 1");
  assert.isTrue(noteListApp.getNotes()[1].text === "note 2");
};

function testNoteListAppStoresNoteListModel() {
  var noteListApp = new NoteListApp();
  noteListApp.addNote("Favourite drink: seltzer")

  assert.isTrue(noteListApp.getNotes()[0].note() === "Favourite drink: seltzer")
}

function testModelViewOutputsHTML() {
  var noteListApp = new NoteListApp();
  noteListApp.addNote("Favourite drink: seltzer")
  var modelView = new ModelView(noteListApp);

  // var noteListApp2 = new NoteListApp();
  // var modelView2 = new ModelView(noteListApp2);
  assert.isTrue(modelView.displayView() === '<ul><li><div>Favourite drink: seltzer</div></li></ul>')
  // assert.isTrue(modelView2.displayView() === null)
}

testNoteAppStoresNote();
testNoteListAppStoresNote();
testNoteListAppStoresNoteListModel();
testModelViewOutputsHTML();
