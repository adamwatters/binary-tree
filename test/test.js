var assert = require('assert');
var makeBST = require("../bst");

describe('BST', function() {
  describe('#insert()', function() {
    var bst = makeBST();
    it('modifys the bst', function() {
      assert.notEqual(bst, bst.insert(1));
    });
  });
});