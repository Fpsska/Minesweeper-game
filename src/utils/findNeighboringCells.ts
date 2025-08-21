import type { TCell } from '../types/boardTypes';

// /. imports

export function findNeighboringCells(
    boardData: TCell[][],
    x: number,
    y: number
): TCell[] {
    const cells: TCell[] = [];

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const tile: TCell = boardData[x + xOffset]?.[y + yOffset]; // validate for work with corner cells

            if (tile) cells.push(tile);
        }
    }
    return cells;
}
