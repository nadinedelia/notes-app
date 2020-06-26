function testNoteID() {
  var note = new Note("I'm new, look at me!!!");
  assert.isTrue(note.getID() === 1, "note id test");
}

testNoteID();
