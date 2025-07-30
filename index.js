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

function knightMoves(start, end) {
  if ([...start, ...end].some((n) => n < 0 || n > 7)) {
    throw new Error('Min position: 0, 0; Max position: 7, 7');
  }

  const queue = [new Cell(start)];
  const visited = new Set([String(start)]);
  let res;
  while (queue.length) {
    const curr = queue.shift();
    if (curr.pos[0] === end[0] && curr.pos[1] === end[1]) {
      res = curr;
      break;
    }
    for (const [dx, dy] of MOVES) {
      const nextPos = [curr.pos[0] + dx, curr.pos[1] + dy];
      const key = String(nextPos);
      if (
        visited.has(key) ||
        nextPos[0] < 0 ||
        nextPos[0] > 7 ||
        nextPos[1] < 0 ||
        nextPos[1] > 7
      ) {
        continue;
      }
      visited.add(key);
      queue.push(new Cell(nextPos, curr));
    }
  }
  console.log(res.toString());
}
