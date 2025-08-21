export type TCell = {
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
};

export type TBombPosition = {
    x: number;
    y: number;
};

export type GameStatus = 'initial' | 'in-game' | 'win' | 'lose';
export type Emoji = 'happy' | 'cool' | 'sad' | 'scared';
