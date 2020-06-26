function testNoteID() {
  var note = new Note("I need a holiday", 0);
  assert.isTrue(note.getID() === 0, "note id test");
}

testNoteID();
