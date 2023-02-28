import { createSlice } from '@reduxjs/toolkit';

// /. imports

interface IboardSlice {
    colCount: number;
    rowCount: number;
    bombsCount: number;
}

const initialState: IboardSlice = {
    colCount: 16,
    rowCount: 16,
    bombsCount: 10
};

const boardSlice = createSlice({
    name: 'boardSlice',
    initialState,
    reducers: {}
});

// export const { } = boardSlice.actions;

export default boardSlice.reducer;
