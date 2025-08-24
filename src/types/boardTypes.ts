export type TState = {
    boardData: TCell[][];
    boardSize: number;
    bombsCount: number;
    gameStatus: GameStatus;
    currentEmoji: Emoji;
    isFirstMove: boolean;
};

export type TCell = {
    id: string;
    x: number;
    y: number;
    value: string | number;
    color?: string;
    isFlipped: boolean;
    isBomb?: boolean;
    status: CellStatus;
};

export type TBombPosition = {
    x: number;
    y: number;
};

export type CellStatus =
    | 'IS_DEFAULT'
    | 'IS_FLAGGED'
    | 'IS_WARNED'
    | 'IS_EXPLODED'
    | 'IS_DEFUSED';
export type GameStatus = 'initial' | 'in-game' | 'win' | 'lose';
export type Emoji = 'happy' | 'cool' | 'sad' | 'scared';
