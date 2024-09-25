import {createSlice} from  "@reduxjs/toolkit"


const categorySlice = createSlice({

    name:"category",

    initialState:{

          category :"All"
    },

    reducers:{

           setCategoriesItem :(state , action)=>{

               state.category = action.payload
           }
    }

})

export const {setCategoriesItem} = categorySlice.actions

export default categorySlice.reducer;