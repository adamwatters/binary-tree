var f = require("./bstFunctions");
var makeDrawer = require("./bstDrawer").makeDrawer;

window.addEventListener("load", function() {
  var screen = document.getElementById("screen").getContext("2d");
  var screenSize = { x: screen.canvas.width, y: screen.canvas.height };
  var drawBST = makeDrawer(screen, screenSize);

  var bst = f.makeBST();

  function insert(data) {
    f.insert(bst, data);
    drawBST(bst);
  };

  insert(100)
  insert(30)
  insert(15)
  insert(60)
  insert(70)
  insert(20)
  insert(44)
  insert(32)

});


