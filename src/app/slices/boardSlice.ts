import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Irow } from '../../Types/boardTypes';

// /. imports

interface IboardSlice {
    boardData: Irow[][];
    colCount: number;
    rowCount: number;
    bombsCount: number;
}

const initialState: IboardSlice = {
    boardData: [],
    colCount: 16,
    rowCount: 16,
    bombsCount: 10
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
            const targetField = rowsData.find(filed => filed.id === id);
            if (targetField) {
                targetField.IsFlipped = true;
            }
        },
        switchFlaggedStatus(
            state,
            action: PayloadAction<{ id: string; status: boolean }>
        ) {
            const { id, status } = action.payload;
            // /. payload

            const rowsData = state.boardData.flat(1);
            const targetField = rowsData.find(filed => filed.id === id);
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
            const targetField = rowsData.find(filed => filed.id === id);
            if (targetField) {
                targetField.isWarned = status;
            }
        }
    }
});

export const {
    setBoardData,
    switchFlippedStatus,
    switchFlaggedStatus,
    switchWarnedStatus
} = boardSlice.actions;

export default boardSlice.reducer;
