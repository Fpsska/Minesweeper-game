import type { ICell } from '../types/boardTypes';

// /. imports

export function findNeighboringCells(
    boardData: ICell[][],
    x: number,
    y: number
): ICell[] {
    const cells: ICell[] = [];

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const tile: ICell = boardData[x + xOffset]?.[y + yOffset]; // validate for work with corner cells

            if (tile) cells.push(tile);
        }
    }
    return cells;
}
