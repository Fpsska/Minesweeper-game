export interface Irow {
    id: string;
    x: number;
    y: number;
    value: any;
    isFlipped: boolean;
    isFlagged: boolean;
    isWarned: boolean;
    isBomb?: boolean;
    isExploded?: boolean;
    isDefused?: boolean;
}

export interface IbombPosition {
    x: number;
    y: number;
}
