interface Icoord {
    x: number;
    y: number;
}

// /. interfaces

export function compareCoordinates(a: Icoord, b: Icoord): boolean {
    return a.x === b.x && a.y === b.y;
}
