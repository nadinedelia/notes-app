(function(carrot) {

  function addHTML() {
    document.getElementById("app").innerHTML = "howdy";
  }

  carrot.addHTML = addHTML
})(this);

addHTML()
