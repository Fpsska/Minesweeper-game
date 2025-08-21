import { getBombsPositions } from './getBombsPositions';

import { generateUniqueID } from './helpers/generateUniqueID';
import { compareCoordinates } from './helpers/compareCoordinates';

import type { TCell, TBombPosition } from '../types/boardTypes';

// /. imports

export const generateBoard = (boardSize: number, bombs: number): TCell[][] => {
    const board: TCell[][] = [];
    const bombsPositions: TBombPosition[] = getBombsPositions(boardSize, bombs);

    for (let x = 0; x < boardSize; x++) {
        const rowArray: TCell[] = [];
        for (let y = 0; y < boardSize; y++) {
            rowArray.push({
                id: generateUniqueID(10),
                x,
                y,
                value: determineInitFieldValue(bombsPositions, x, y), // 'B' or ''

                // compare current bombPositions (x,y) with current rowArray position (x,y)
                isBomb: bombsPositions.some(
                    compareCoordinates.bind(null, { x, y })
                ),
                isFlipped: false,
                isFlagged: false,
                isWarned: false,
                isExploded: false,
                isDefused: false
            });
        }
        board.push(rowArray);
    }
    // /. generate initial fields data

    return board;
};

function determineInitFieldValue(
    bombData: TBombPosition[],
    x: number,
    y: number
): string {
    const isBombFiled = bombData.some(compareCoordinates.bind(null, { x, y }));
    return isBombFiled ? 'B' : '';
}
