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
