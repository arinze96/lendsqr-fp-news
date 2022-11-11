import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    //increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //state.value += 1
   // },
    //decrement: (state) => {
    //  state.value -= 1
   // },
    switchTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer