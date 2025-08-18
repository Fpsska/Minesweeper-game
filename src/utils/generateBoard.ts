import { getBombsPositions } from './getBombsPositions';

import { generateUniqueID } from './helpers/generateUniqueID';
import { compareCoordinates } from './helpers/compareCoordinates';

import type { ICell, IbombPosition } from '../types/boardTypes';

// /. imports

export const generateBoard = (boardSize: number, bombs: number): ICell[][] => {
    const board: ICell[][] = [];
    const bombsPositions: IbombPosition[] = getBombsPositions(boardSize, bombs);

    for (let x = 0; x < boardSize; x++) {
        const rowArray: ICell[] = [];
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
    bombData: IbombPosition[],
    x: number,
    y: number
): string {
    const isBombFiled = bombData.some(compareCoordinates.bind(null, { x, y }));
    return isBombFiled ? 'B' : '';
}
