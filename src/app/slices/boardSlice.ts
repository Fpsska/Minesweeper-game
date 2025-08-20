import { createSlice, current, type PayloadAction } from '@reduxjs/toolkit';

import type { ICell } from '../../types/boardTypes';

// /. imports

export type GameStatus = 'initial' | 'in-game' | 'win' | 'lose';
export type Emoji = 'happy' | 'cool' | 'sad' | 'scared';
interface IboardSlice {
    boardData: ICell[][];
    boardSize: number;
    bombsCount: number;
    gameStatus: GameStatus;
    currentEmoji: Emoji;
    isFirstMove: boolean;
}

const initialState: IboardSlice = {
    boardData: [],
    boardSize: 10,
    bombsCount: 8,
    gameStatus: 'initial',
    currentEmoji: 'happy',
    isFirstMove: true
};

const boardSlice = createSlice({
    name: 'boardSlice',
    initialState,
    reducers: {
        setBoardData(state, action: PayloadAction<ICell[][]>) {
            state.boardData = action.payload;
        },
        shuffleBoardData(state, action: PayloadAction<{ bombID: string }>) {
            const { bombID } = action.payload;
            // /. payload

            const rowsData = state.boardData.flat(1);
            const targetBomb = rowsData.find(field => field.id === bombID);
            const neighboredField = rowsData.find(field => !field.isBomb);

            if (targetBomb && neighboredField) {
                targetBomb.value = '';
                targetBomb.isBomb = false;
                neighboredField.value = 'B';
                neighboredField.isBomb = true;
            }
        },
        updateCell(
            state,
            action: PayloadAction<{ id: string; changes: Partial<ICell> }>
        ) {
            const { id, changes } = action.payload;
            // /. payload

            for (const row of state.boardData) {
                const cell = row.find(cell => cell.id === id);
                if (cell) {
                    Object.assign(cell, changes);
                    break;
                }
            }

            // state.boardData = state.boardData.map(row => {
            //     return row.map(cell => {
            //         if (cell.id === id) {
            //             return { ...cell, ...changes };
            //         }
            //         return cell;
            //     });
            // });
        },
        switchFirstMoveStatus(
            state,
            action: PayloadAction<{ status: boolean }>
        ) {
            const { status } = action.payload;
            // /. payload

            state.isFirstMove = status;
        },
        switchGameStatus(state, action: PayloadAction<{ status: GameStatus }>) {
            const { status } = action.payload;
            // /. payload

            state.gameStatus = status;
        },
        switchEmojiStatus(state, action: PayloadAction<{ emoji: Emoji }>) {
            const { emoji } = action.payload;
            // /. payload

            state.currentEmoji = emoji;
        },
        openBombsMap(state, action: PayloadAction<{ id: string }>) {
            const { id } = action.payload;
            // /. payload

            const bombs = state.boardData.flat(1).filter(cell => cell.isBomb);

            bombs.map(bomb => {
                bomb.isFlipped = true;
                bomb.isExploded = bomb.id === id;
            });

            // state.boardData = state.boardData.map(row => {
            //     return row.map(cell => {
            //         if (cell.isBomb) {
            //             return {
            //                 ...cell,
            //                 isFlipped: true,
            //                 isExploded: cell.id === id
            //             };
            //         }
            //         return cell;
            //     });
            // });
        }
    }
});

export const {
    setBoardData,
    shuffleBoardData,
    updateCell,
    switchFirstMoveStatus,
    switchEmojiStatus,
    switchGameStatus,
    openBombsMap
} = boardSlice.actions;

export default boardSlice.reducer;
