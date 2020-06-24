(function(exports) {
  function NoteListApp() {
    this.notesArray = [];
    // this.noteApp = null;
  };

  NoteListApp.prototype.addNote = function(note) {
    newnote = new NoteApp(note);
    this.notesArray.push(newnote)
  };

  NoteListApp.prototype.getNotes = function() {
    return this.notesArray;
  }

  exports.NoteListApp = NoteListApp;
})(this);

// class NoteListApp {
//    constructor() {
//      this.notesArray = [];
//    }
//
//    addNote(note) {
//      this.notesArray.push(note)
//    }
//
//    notes() {
//      return this.notesArray
//    };
// };
