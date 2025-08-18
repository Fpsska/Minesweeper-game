import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { determineColorByNumber } from '../../utils/helpers/determineNumberColor';

import type { Irow } from '../../types/boardTypes';

// /. imports

export type GameStatus = 'initial' | 'in-game' | 'win' | 'lose';
export type Emoji = 'happy' | 'cool' | 'sad' | 'scared';
interface IboardSlice {
    boardData: Irow[][];
    boardSize: number;
    bombsCount: number;
    gameStatus: GameStatus;
    currentEmoji: Emoji;
    isFirstMove: boolean;
}

const initialState: IboardSlice = {
    boardData: [],
    boardSize: 2,
    bombsCount: 1,
    gameStatus: 'initial',
    currentEmoji: 'happy',
    isFirstMove: true
};

const boardSlice = createSlice({
    name: 'boardSlice',
    initialState,
    reducers: {
        setBoardData(state, action: PayloadAction<Irow[][]>) {
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
        switchFlippedStatus(state, action: PayloadAction<{ id: string }>) {
            const { id } = action.payload;
            // /. payload

            const rowsData = state.boardData.flat(1);
            const targetField = rowsData.find(field => field.id === id);
            if (targetField) {
                targetField.isFlipped = true;
            }
        },
        switchFlaggedStatus(
            state,
            action: PayloadAction<{ id: string; status: boolean }>
        ) {
            const { id, status } = action.payload;
            // /. payload

            const rowsData = state.boardData.flat(1);
            const targetCell = rowsData.find(cell => cell.id === id);

            if (targetCell) {
                targetCell.isFlagged = status;
                if (targetCell.isBomb) targetCell.isDefused = status;
            }
        },
        switchWarnedStatus(
            state,
            action: PayloadAction<{ id: string; status: boolean }>
        ) {
            const { id, status } = action.payload;
            // /. payload

            const rowsData = state.boardData.flat(1);
            const targetField = rowsData.find(field => field.id === id);
            if (targetField) {
                targetField.isWarned = status;
            }
        },
        switchFirstMoveStatus(
            state,
            action: PayloadAction<{ status: boolean }>
        ) {
            const { status } = action.payload;
            // /. payload

            state.isFirstMove = status;
        },
        setCurrentCellValue(
            state,
            action: PayloadAction<{ id: string; value: number }>
        ) {
            const { id, value } = action.payload;
            // /. payload

            const rowsData = state.boardData.flat(1);
            const targetField = rowsData.find(field => field.id === id);
            if (targetField) {
                targetField.value = value;
                targetField.color = determineColorByNumber(value);
            }
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

            const bombsData = state.boardData
                .flat(1)
                .filter(field => field.isBomb);

            bombsData.map(field => {
                if (field.id === id) {
                    field.isFlipped = true;
                    field.isExploded = true;
                } else {
                    field.isFlipped = true;
                }
            });
        }
    }
});

export const {
    setBoardData,
    shuffleBoardData,
    switchFlippedStatus,
    switchFlaggedStatus,
    switchWarnedStatus,
    switchFirstMoveStatus,
    setCurrentCellValue,
    switchEmojiStatus,
    switchGameStatus,
    openBombsMap
} = boardSlice.actions;

export default boardSlice.reducer;
