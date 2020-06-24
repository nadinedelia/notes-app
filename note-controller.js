
(function(exports) {
  function NoteController(noteList) {
    noteList.addNote('Favourite drink: seltzer')
    this.htmlView = new HtmlView(noteList)
  };

  NoteController.prototype.displayHtml = function() {
    document.getElementById("app").innerHTML = this.htmlView.displayView();
  };

  exports.NoteController = NoteController;
})(this);
noteController = new NoteController(noteList = new NoteList)
noteController.displayHtml()
