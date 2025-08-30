import { compareCoordinates } from './compareCoordinates';

import type { TCoords } from '../../types/boardTypes';

export function getInitCellValue(
    bombsPositions: TCoords[],
    x: number,
    y: number
): string {
    const isBombCell = bombsPositions.some((pos) =>
        compareCoordinates(pos, { x, y })
    );
    return isBombCell ? 'B' : '';
}
