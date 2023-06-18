import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null, // Додано поле для збереження повідомлення про помилку
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null; // Очистити повідомлення про помилку при успішній реєстрації
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null; // Очистити повідомлення про помилку при успішному вході
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null; // Очистити повідомлення про помилку при виході
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null; // Очистити повідомлення про помилку при успішному оновленні користувача
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload; // Зберегти повідомлення про помилку при невдалому оновленні користувача
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload; // Зберегти повідомлення про помилку при невдалій реєстрації
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload; // Зберегти повідомлення про помилку при невдалому вході
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload; // Зберегти повідомлення про помилку при невдалому виході
      });
  },
});

export const authReducer = authSlice.reducer;
