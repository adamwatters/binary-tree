
function makeDrawer(screen, screenSize) {

  screen.textAlign = "center";
  screen.font = "16px Comic Sans MS";
  screen.textBaseline = "middle"

  var drawNode = function(data, level, xOffset, xReference) {
    var DRAW_SIZE = 32;
    var drawX = xReference + xOffset * screenSize.x / (2.5 * ((level + 1) / 2));
    var drawY = 30 + level * 60;

    screen.strokeRect(drawX, drawY, DRAW_SIZE, DRAW_SIZE)
    screen.fillText(data, drawX + DRAW_SIZE/2 , drawY + DRAW_SIZE/2)

    return drawX;
  }

  var drawTree = function(bst) {
    var initialX = screenSize.x / 2;
    drawNode(bst.root.data, 0, 0, initialX);
    (function drawSubtrees(node, level, xReference){
      if (node.left !== null) {
        var leftAncestorX = drawNode(node.left.data, level, -1, xReference);
        drawSubtrees(node.left, level + 1, leftAncestorX);
      }

      if (node.right !== null) {
        var rightAncestorX = drawNode(node.right.data, level, 1, xReference);
        drawSubtrees(node.right, level + 1, rightAncestorX);
      }

    })(bst.root, 1, initialX);
  }

// returns drawer function with access to screen and private methods

  return function(bst) {
    screen.clearRect(0, 0, screenSize.x, screenSize.y);
    if (bst.root === null) {
      screen.fillText("NULL",screenSize.x / 2, screenSize.y / 2)
    } else {
      drawTree(bst);
    }
  }
}



module.exports = {
  makeDrawer: makeDrawer
}