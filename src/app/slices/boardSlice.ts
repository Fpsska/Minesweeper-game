import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Irow } from '../../Types/boardTypes';

// /. imports

interface IboardSlice {
    boardData: Irow[][];
    boardSize: number;
    bombsCount: number;
    isGameOver: boolean;
    currentEmoji: string;
}

const initialState: IboardSlice = {
    boardData: [],
    boardSize: 10,
    bombsCount: 10,
    isGameOver: false,
    currentEmoji: 'happy'
};

const boardSlice = createSlice({
    name: 'boardSlice',
    initialState,
    reducers: {
        setBoardData(state, action: PayloadAction<Irow[][]>) {
            state.boardData = action.payload;
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
            const targetField = rowsData.find(field => field.id === id);
            if (targetField) {
                targetField.isFlagged = status;
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
        switchDefusedStatus(
            state,
            action: PayloadAction<{ id: string; status: boolean }>
        ) {
            const { id, status } = action.payload;
            // /. payload

            const rowsData = state.boardData.flat(1);
            const targetField = rowsData.find(field => field.id === id);
            if (targetField) {
                targetField.isDefused = status;
            }
        },
        switchGameOverStatus(
            state,
            action: PayloadAction<{ status: boolean }>
        ) {
            const { status } = action.payload;
            // /. payload
            state.isGameOver = status;
        },
        switchEmojiStatuses(state, action: PayloadAction<string>) {
            state.currentEmoji = action.payload;
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
        },
        calcBombsCount(state) {
            const bombsData = state.boardData
                .flat(1)
                .filter(field => field.isBomb);
            const activeBombs = bombsData.filter(field => !field.isDefused);
            state.bombsCount = activeBombs.length;
        },
        decrementBombsCount(state) {
            state.bombsCount -= 1;
        }
    }
});

export const {
    setBoardData,
    switchFlippedStatus,
    switchFlaggedStatus,
    switchWarnedStatus,
    switchDefusedStatus,
    switchGameOverStatus,
    switchEmojiStatuses,
    openBombsMap,
    calcBombsCount,
    decrementBombsCount
} = boardSlice.actions;

export default boardSlice.reducer;
