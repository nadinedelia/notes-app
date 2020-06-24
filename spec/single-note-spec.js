function singleNoteObjectTest() {
  var note = new Note("I'm a note")
  var singleNote = new SingleNote(note)
  assert.isTrue(singleNote, 'singleNote');
}

singleNoteObjectTest()
