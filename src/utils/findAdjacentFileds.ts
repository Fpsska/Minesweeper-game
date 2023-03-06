import { Irow } from 'types/boardTypes';

// /. imports

export function findAdjacentFileds(
    boardData: Irow[][],
    x: number,
    y: number
): Irow[] {
    const fields: Irow[] = [];

    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const tile: Irow = boardData[x + xOffset]?.[y + yOffset]; // validate for work with corner fields

            if (tile) fields.push(tile);
        }
    }
    return fields;
}
