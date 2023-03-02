import { Irow, IbombPosition } from '../Types/boardTypes';

import { generateUniqueID } from './generateUniqueID';
import { getRandomNum } from './getRandomNum';
import { validatePositionsUnique } from './validatePositionsUnique';

// /. imports

export function generateBoard(boardSize: number, bombs: number): Irow[][] {
    const board: Irow[][] = [];
    const bombsPositions: IbombPosition[] = getBombsPositions(boardSize, bombs);

    for (let x = 0; x < boardSize; x++) {
        const rowArray: Irow[] = [];
        for (let y = 0; y < boardSize; y++) {
            rowArray.push({
                id: generateUniqueID(10),
                x,
                y,

                // compare current bombPositions (x,y) with current rowArray position (x,y)
                value: bombsPositions.some(
                    validatePositionsUnique.bind(null, { x, y })
                )
                    ? 'B'
                    : 0,
                isFlipped: false,
                isFlagged: false,
                isWarned: false,

                // compare current bombPositions (x,y) with current rowArray position (x,y)
                isBomb: bombsPositions.some(
                    validatePositionsUnique.bind(null, { x, y })
                ),
                isExploded: false,
                isDefused: false
            });
        }
        board.push(rowArray);
    }
    // /. generate initial fields data

    for (let rowVal = 0; rowVal < boardSize; rowVal++) {
        for (let colVal = 0; colVal < boardSize; colVal++) {
            if (board[rowVal][colVal].value === 'B') {
                continue;
            }

            // Right
            if (
                colVal < boardSize - 1 &&
                board[rowVal][colVal + 1].value === 'B'
            ) {
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
                colVal < boardSize - 1 &&
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
            if (
                rowVal < boardSize - 1 &&
                board[rowVal + 1][colVal].value === 'B'
            ) {
                board[rowVal][colVal].value++;
            }

            // Bottom Right
            if (
                rowVal < boardSize - 1 &&
                colVal < boardSize - 1 &&
                board[rowVal + 1][colVal + 1].value === 'B'
            ) {
                board[rowVal][colVal].value++;
            }

            // Bottom Left
            if (
                rowVal < boardSize - 1 &&
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

export function getBombsPositions(
    boardSize: number,
    bombsCount: number
): IbombPosition[] {
    const positions: IbombPosition[] = [];

    while (positions.length < bombsCount) {
        const bombPosition: IbombPosition = {
            x: getRandomNum(boardSize),
            y: getRandomNum(boardSize)
        };

        // validate by uniqueness of positions values
        if (
            !positions.some(pos => validatePositionsUnique(pos, bombPosition))
        ) {
            positions.push(bombPosition);
        }
    }

    return positions;
}
