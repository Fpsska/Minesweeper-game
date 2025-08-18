export interface ICell {
    id: string;
    x: number;
    y: number;
    value: string | number; // TODO
    isFlipped: boolean;
    isFlagged: boolean;
    isWarned: boolean;
    isBomb?: boolean;
    isExploded?: boolean;
    isDefused?: boolean;
    color?: string;
}

export interface IbombPosition {
    x: number;
    y: number;
}
