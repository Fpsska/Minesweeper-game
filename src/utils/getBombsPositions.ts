import { getRandomNum } from './helpers/getRandomNum';
import { compareCoordinates } from './helpers/compareCoordinates';

import type { TBombPosition } from '../types/boardTypes';

// /. imports

export function getBombsPositions(
    boardSize: number,
    bombsCount: number
): TBombPosition[] {
    const positions: TBombPosition[] = [];

    while (positions.length < bombsCount) {
        const bombPosition: TBombPosition = {
            x: getRandomNum(boardSize),
            y: getRandomNum(boardSize)
        };

        // validate by uniqueness of positions values
        if (!positions.some((pos) => compareCoordinates(pos, bombPosition))) {
            positions.push(bombPosition);
        }
    }

    return positions;
}
