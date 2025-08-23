import { getBombsPositions } from './getBombsPositions';

import { generateUniqueID } from './helpers/generateUniqueID';
import { compareCoordinates } from './helpers/compareCoordinates';

import type { TCell, TBombPosition } from '../types/boardTypes';

// /. imports

export const generateBoard = (
    boardSize: number,
    bombsCount: number
): TCell[][] => {
    const board: TCell[][] = [];
    const bombsPositions: TBombPosition[] = getBombsPositions(
        boardSize,
        bombsCount
    );

    for (let x = 0; x < boardSize; x++) {
        const rowArray: TCell[] = [];
        for (let y = 0; y < boardSize; y++) {
            rowArray.push({
                id: generateUniqueID(10),
                x,
                y,
                value: determineInitCellValue(bombsPositions, x, y), // 'B' or ''
                // compare current bombPositions (x,y) with current rowArray position (x,y)
                status: 'IS_DEFAULT',
                isFlipped: false,
                isBomb: bombsPositions.some(
                    compareCoordinates.bind(null, { x, y }) // TODO
                )
            });
        }
        board.push(rowArray);
    }
    // /. generate initial fields data

    return board;
};

function determineInitCellValue(
    bombsPositions: TBombPosition[],
    x: number,
    y: number
): string {
    const isBombCell = bombsPositions.some(
        compareCoordinates.bind(null, { x, y }) // TODO
    );
    return isBombCell ? 'B' : '';
}
