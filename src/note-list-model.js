(function(exports) {
  function NoteList() {
    this.notesArray = [];
  };

  NoteList.prototype.addNote = function(note) {
    newnote = new Note(note);
    this.notesArray.push(newnote)
  };

  NoteList.prototype.getNotes = function() {
    return this.notesArray;
  }

  exports.NoteList = NoteList;
})(this);

// class NoteList {
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
