import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface ThemeSlice {
  value: "DARK" | "LIGHT"
}

const initialState: ThemeSlice = {
  value: "DARK"
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => { 
      state.value = state.value === "DARK" ? "LIGHT" : "DARK"
    }
  }
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer