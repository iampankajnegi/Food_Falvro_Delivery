import {createSlice} from  "@reduxjs/toolkit"


const CategorySlice = createSlice({

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

export const {setCategoriesItem} = CategorySlice.actions

export default CategorySlice.reducer;