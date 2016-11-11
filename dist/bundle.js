(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{}],2:[function(require,module,exports){
function newNode(data) {
  return {
    left: null,
    right: null,
    data: data
  }
}

// public methods ___________________________

function makeBST() {
  return {
    root: null
  }
}

function contains(bst, data) {
  var current = bst.root;
  if (bst.root === null) {
    return false
  } else {
    while (true) {
      if (data === current.data){
        return true;
      } else if (data < current.data) {
        if (current.left === null) {
          return false
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          return false;
        } else {
          current = current.right;
        }
      }
    }
  }
}

function insert(bst, data) {
  var current = bst.root;
  if (bst.root === null) {
    bst.root = newNode(data)
    return bst
  } else {
    while (true) {
      if (data === current.data){
        console.log("no duplicates allowed")
        return bst;
      } else if (data < current.data) {
        if (current.left === null) {
          current.left = newNode(data)
          return bst;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode(data)
          return bst;
        } else {
          current = current.right;
        }
      }
    }
  }
}


module.exports = {
  makeBST: makeBST,
  contains: contains,
  insert: insert
}

},{}],3:[function(require,module,exports){
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



},{"./bstDrawer":1,"./bstFunctions":2}]},{},[3]);
