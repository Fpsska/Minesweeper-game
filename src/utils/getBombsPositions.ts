import { getRandomNum } from './helpers/getRandomNum';
import { compareCoordinates } from './helpers/compareCoordinates';

import type { TCoords } from '../types/boardTypes';

// /. imports

export function getBombsPositions(
    boardSize: number,
    bombsCount: number
): TCoords[] {
    const result: TCoords[] = [];

    while (result.length < bombsCount) {
        const bombPosition: TCoords = {
            x: getRandomNum(boardSize),
            y: getRandomNum(boardSize)
        };

        // validate by uniqueness of positions values
        const isValidCoords = !result.some((pos) =>
            compareCoordinates(pos, bombPosition)
        );
        if (isValidCoords) result.push(bombPosition);
    }

    return result;
}
