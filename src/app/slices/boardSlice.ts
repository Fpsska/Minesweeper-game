import { createSlice, current, type PayloadAction } from '@reduxjs/toolkit';

import { generateBoard } from '../../utils/generateBoard';

import type { TState, TCell, GameStatus, Emoji } from '../../types/boardTypes';

// /. imports

const initialState: TState = {
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
        setBoardData(state, action: PayloadAction<TCell[][]>) {
            state.boardData = action.payload;
        },
        shuffleBoardData(state, action: PayloadAction<{ bombID: string }>) {
            const { bombID } = action.payload;
            // /. payload

            for (const row of state.boardData) {
                const targetBomb = row.find((cell) => cell.id === bombID);
                const neighboredCell = row.find((cell) => !cell.isBomb);

                if (targetBomb && neighboredCell) {
                    targetBomb.value = '';
                    targetBomb.isBomb = false;
                    neighboredCell.value = 'B';
                    neighboredCell.isBomb = true;
                    break;
                }
            }
        },
        updateCell(
            state,
            action: PayloadAction<{ id: string; changes: Partial<TCell> }>
        ) {
            const { id, changes } = action.payload;
            // /. payload

            for (const row of state.boardData) {
                const cell = row.find((cell) => cell.id === id);

                if (cell) {
                    Object.assign(cell, changes);
                    break;
                }
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
        switchGameStatus(state, action: PayloadAction<{ status: GameStatus }>) {
            const { status } = action.payload;
            // /. payload

            state.gameStatus = status;
        },
        restartGame(state) {
            state.gameStatus = 'initial';
            state.currentEmoji = 'happy';
            state.isFirstMove = true;
            state.boardData = generateBoard(state.boardSize, state.bombsCount);
        },
        switchEmojiStatus(state, action: PayloadAction<{ emoji: Emoji }>) {
            const { emoji } = action.payload;
            // /. payload

            state.currentEmoji = emoji;
        },
        openBombsMap(state, action: PayloadAction<{ id: string }>) {
            const { id } = action.payload;
            // /. payload

            for (const row of state.boardData) {
                for (const cell of row) {
                    if (!cell.isBomb) continue;
                    cell.isFlipped = true;
                    cell.status =
                        cell.id === id
                            ? 'IS_EXPLODED'
                            : cell.status === 'IS_FLAGGED'
                            ? 'IS_DEFUSED'
                            : 'IS_COMPUTED';
                }
            }
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
    restartGame,
    openBombsMap
} = boardSlice.actions;

export default boardSlice.reducer;
