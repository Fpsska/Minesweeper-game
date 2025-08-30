import type { TCoords } from '../../types/boardTypes';

// /. imports

export function compareCoordinates(a: TCoords, b: TCoords): boolean {
    return a.x === b.x && a.y === b.y;
}
