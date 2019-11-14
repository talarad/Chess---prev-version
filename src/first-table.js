const numberOfRows = 8;
const numberOfColumns = 8;
const table = new Array(numberOfColumns);

for (let row = 0; row < numberOfColumns; row++) {
    if (row === 0) {
        table[row] = new Array(numberOfRows).fill().map(() => ({ side: "black" }));
    } else if (row === 1) {
        table[row] = new Array(numberOfRows).fill().map(() => ({ name: "pawn", side: "black", firstMove: true }));
    } else if (row === numberOfColumns - 2) {
        table[row] = new Array(numberOfRows).fill().map(() => ({ name: "pawn", side: "white", firstMove: true }));
    } else if (row === numberOfColumns - 1) {
        table[row] = new Array(numberOfRows).fill().map(() => ({ side: "white" }));
    } else {
        table[row] = new Array(numberOfRows).fill().map(() => ({ name: "" }));
    }
}

table[0][0].name = 'rook';
table[0][7].name = 'rook';
table[7][0].name = 'rook';
table[7][7].name = 'rook';

table[0][1].name = 'knight'
table[0][6].name = 'knight'
table[7][1].name = 'knight'
table[7][6].name = 'knight'

table[0][2].name = 'bishop'
table[0][5].name = 'bishop'
table[7][2].name = 'bishop'
table[7][5].name = 'bishop'

table[0][3].name = 'queen'
table[0][4].name = 'king'
table[7][3].name = 'queen'
table[7][4].name = 'king'

export default table;