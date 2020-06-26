(function(exports) {
  function NoteList() {
    this.notesArray = [];
    this.id = 0
  };

  NoteList.prototype.addNote = function(note) {
    newnote = new Note(note, this.id);
    this.notesArray.push(newnote)
    this.id++
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
//    getNotes() {
//      return this.notesArray
//    };
// };
