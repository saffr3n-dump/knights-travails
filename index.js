const MOVES = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];

class Cell {
  constructor(pos, parent = null) {
    this.pos = pos;
    this.parent = parent;
  }

  toString() {
    let res = String(this.pos);
    let parent = this.parent;
    while (parent) {
      res = String(parent.pos) + ' -> ' + res;
      parent = parent.parent;
    }
    return res;
  }
}
