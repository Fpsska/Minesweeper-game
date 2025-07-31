import {
    configureStore,
    type ThunkAction,
    type Action
} from '@reduxjs/toolkit';

import boardSlice from './slices/boardSlice';

// /. imports

export const store = configureStore({
    reducer: { boardSlice }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
