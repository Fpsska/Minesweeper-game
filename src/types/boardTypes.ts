export interface Irow {
    // TODO: Irow => ICell
    id: string;
    x: number;
    y: number;
    value: any; // TODO
    isFlipped: boolean;
    isFlagged: boolean;
    isWarned: boolean;
    isBomb?: boolean; // TODO: delete?
    isExploded?: boolean;
    isDefused?: boolean;
    color?: string;
}

export interface IbombPosition {
    x: number;
    y: number;
}
