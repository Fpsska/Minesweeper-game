type TCoords = {
    x: number;
    y: number;
};

// /. interfaces

export function compareCoordinates(a: TCoords, b: TCoords): boolean {
    return a.x === b.x && a.y === b.y;
}
