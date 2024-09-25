import { createSlice } from "@reduxjs/toolkit";


const storedTheme = localStorage.getItem("darkMode") === "true" ;

const ModeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: storedTheme ,
  },

  reducers: {

      toggleEvent:(state)=>{

           state.darkMode = !state.darkMode

           localStorage.setItem("darkMode" , state.darkMode)
      },

    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem("darkMode" , state.darkMode)
    },
  },
});

export const  {toggleEvent,setDarkMode} = ModeSlice.actions ;

export default ModeSlice.reducer
