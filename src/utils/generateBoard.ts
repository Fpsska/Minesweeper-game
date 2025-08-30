import { getBombsPositions } from './getBombsPositions';

import { generateUniqueID } from './helpers/generateUniqueID';
import { getInitCellValue } from './helpers/getInitCellValue';

import type { TCell, TCoords } from '../types/boardTypes';

// /. imports

// TODO: maybe async?
export const generateBoard = (
    boardSize: number,
    bombsCount: number
): TCell[][] => {
    const board: TCell[][] = [];
    const bombsPositions: TCoords[] = getBombsPositions(boardSize, bombsCount);

    for (let x = 0; x < boardSize; x++) {
        const rowArray: TCell[] = [];

        for (let y = 0; y < boardSize; y++) {
            const value = getInitCellValue(bombsPositions, x, y); // 'B' or ''

            rowArray.push({
                id: generateUniqueID(10),
                x,
                y,
                value,
                status: 'IS_DEFAULT',
                isFlipped: false,
                isBomb: Boolean(value)
            });
        }
        board.push(rowArray);
    }

    return board;
};
