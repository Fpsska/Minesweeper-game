import { Irow } from '../Types/boardTypes';

import { getRandomNum } from './getRandomNum';
import { generateUniqueID } from './generateUniqueID';

// /. imports

export function generateBoard(
    row: number,
    col: number,
    bombs: number
): Irow[][] {
    const board: Irow[][] = [];

    for (let x = 0; x < row; x++) {
        const rowArray: Irow[] = [];
        for (let y = 0; y < col; y++) {
            rowArray.push({
                id: generateUniqueID(10),
                x,
                y,
                value: 0,
                isFlipped: false,
                isFlagged: false,
                isWarned: false
            });
        }
        board.push(rowArray);
    }
    // /. generate initial fields data

    let bombsCounter = 0;
    while (bombsCounter < bombs) {
        const x = getRandomNum(0, row - 1);
        const y = getRandomNum(0, col - 1);

        if (board[x][y].value === 0) {
            board[x][y].value = 'B';
            board[x][y].isBomb = true;
            board[x][y].isExploded = false;
            board[x][y].isDefused = false;
            bombsCounter++;
        }
    }
    // /. generate random bombs placement

    for (let rowVal = 0; rowVal < row; rowVal++) {
        for (let colVal = 0; colVal < col; colVal++) {
            if (board[rowVal][colVal].value === 'B') {
                continue;
            }

            // Right
            if (colVal < col - 1 && board[rowVal][colVal + 1].value === 'B') {
                board[rowVal][colVal].value++;
            }

            // Left
            if (colVal > 0 && board[rowVal][colVal - 1].value === 'B') {
                board[rowVal][colVal].value++;
            }

            // Top
            if (rowVal > 0 && board[rowVal - 1][colVal].value === 'B') {
                board[rowVal][colVal].value++;
            }

            // Top Right
            if (
                rowVal > 0 &&
                colVal < col - 1 &&
                board[rowVal - 1][colVal + 1].value === 'B'
            ) {
                board[rowVal][colVal].value++;
            }

            // Top Left
            if (
                rowVal > 0 &&
                colVal > 0 &&
                board[rowVal - 1][colVal - 1].value === 'B'
            ) {
                board[rowVal][colVal].value++;
            }

            // Bottom
            if (rowVal < row - 1 && board[rowVal + 1][colVal].value === 'B') {
                board[rowVal][colVal].value++;
            }

            // Bottom Right
            if (
                rowVal < row - 1 &&
                colVal < col - 1 &&
                board[rowVal + 1][colVal + 1].value === 'B'
            ) {
                board[rowVal][colVal].value++;
            }

            // Bottom Left
            if (
                rowVal < row - 1 &&
                colVal > 0 &&
                board[rowVal + 1][colVal - 1].value === 'B'
            ) {
                board[rowVal][colVal].value++;
            }
        }
    }
    // /. determine data for values of fields

    return board;
}
