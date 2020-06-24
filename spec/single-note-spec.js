function singleNoteObjectTest() {
  var note = new Note("I'm a note")
  var singleNote = new SingleNote(note)
  assert.isTrue(singleNote, 'singleNote');
}

function singleNoteOutput() {
  var note = new Note('Favourite drink: seltzer')
  var singleNote = new SingleNote(note);
  var string = '<div>Favourite drink: seltzer</div>'
  assert.isTrue(singleNote.getHtml() === string, 'singleNote.getHtml');
};

singleNoteObjectTest()
singleNoteOutput()
