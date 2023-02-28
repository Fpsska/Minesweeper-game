import { createSlice } from '@reduxjs/toolkit';

// /. imports

interface IboardSlice {
    bombsCount: number;
    colCount: number;
    rowCount: number;
}

const initialState: IboardSlice = {
    bombsCount: 10,
    colCount: 10,
    rowCount: 10
};

const boardSlice = createSlice({
    name: 'boardSlice',
    initialState,
    reducers: {}
});

// export const { } = boardSlice.actions;

export default boardSlice.reducer;
