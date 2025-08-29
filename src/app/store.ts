import {
    configureStore,
    type ThunkAction,
    type Action
} from '@reduxjs/toolkit';

import boardSlice from './slices/boardSlice';
import { listenerMiddleware } from './middlewares';

// /. imports

export const store = configureStore({
    reducer: { boardSlice },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
