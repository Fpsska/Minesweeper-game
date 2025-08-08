import { getRandomNum } from './helpers/getRandomNum';
import { compareCoordinates } from './helpers/compareCoordinates';

import type { IbombPosition } from '../types/boardTypes';

// /. imports

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
        if (!positions.some(pos => compareCoordinates(pos, bombPosition))) {
            positions.push(bombPosition);
        }
    }

    return positions;
}
