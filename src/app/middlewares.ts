import { createListenerMiddleware } from '@reduxjs/toolkit';

import { RootState } from './store';

import {
    switchEmojiStatus,
    switchGameStatus,
    updateCell
} from './slices/boardSlice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: updateCell,
    effect: async (_, listenerApi) => {
        const { boardSlice } = listenerApi.getState() as RootState;

        if (boardSlice.gameStatus !== 'in-game') return;

        for (const row of boardSlice.boardData) {
            if (row.some((cell) => cell.status === 'IS_DEFAULT')) return;
        }

        listenerApi.dispatch((dispatch) => {
            dispatch(switchGameStatus({ status: 'win' }));
            dispatch(switchEmojiStatus({ emoji: 'cool' }));
        });
    }
});
