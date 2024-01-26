import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, {payload}) {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    }
  }
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;