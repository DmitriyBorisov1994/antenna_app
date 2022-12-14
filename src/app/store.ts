import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dipoleReducer from '../features/dipole/dipoleSlice'

export const store = configureStore({
  reducer: {
    dipole: dipoleReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
