
function testNoteStoresNote() {
  var note = new Note('My favourite language is JavaScript');
  assert.isTrue(note.getText() === 'My favourite language is JavaScript');
};

function testNoteID() {
  var note = new Note("I'm new, look at me!!!");
  assert.isTrue(note.getID() == 1, "note id test");
}


testNoteStoresNote();
testNoteID();
