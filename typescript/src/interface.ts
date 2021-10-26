// 행위만 기술
interface TV {
  turnOn(): boolean;
  turnOff(): void;
}

// 메소드는 여기서 구현
const myTV: TV = {
  turnOn() {
    return true;
  },
  turnOff() {},
};

function tryTurnOn(tv: TV) {
  tv.turnOn();
}
tryTurnOn(myTV);

// 행위는 작성하지 않고, 가져야 할 속성만 기술
interface Cell {
  row: number;
  col: number;
  piece?: Piece; // ?를 쓰면 option
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({
        row,
        col,
      });
    }
  }
  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};
