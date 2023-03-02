import { Irow, IbombPosition } from '../types/boardTypes';

import { getBombsPositions } from './getBombsPositions';
import { findAdjacentFileds } from './findAdjacentFileds';

import { generateUniqueID } from './helpers/generateUniqueID';
import { compareCoordinates } from './helpers/compareCoordinates';

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

                value: determineFieldValue(bombsPositions, board, x, y), // 'B' or 1/2/3..
                isFlipped: false,
                isFlagged: false,
                isWarned: false,

                // compare current bombPositions (x,y) with current rowArray position (x,y)
                isBomb: bombsPositions.some(
                    compareCoordinates.bind(null, { x, y })
                ),
                isExploded: false,
                isDefused: false
            });
        }
        board.push(rowArray);
    }
    // /. generate initial fields data

    return board;
}

export function determineFieldValue(
    bombData: IbombPosition[],
    boardData: Irow[][],
    x: number,
    y: number
): string | number {
    const isBombFiled = bombData.some(compareCoordinates.bind(null, { x, y }));

    const neighboredFields = findAdjacentFileds(boardData, x, y);
    const neighboredBombsFields = neighboredFields.filter(
        field => field.isBomb
    );

    return isBombFiled ? 'B' : neighboredBombsFields.length;
}
