import { createSlice } from "@reduxjs/toolkit";

  const showCart = JSON.parse(localStorage.getItem("cart"))||[]
 
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: showCart,
  },
  reducers: {
    // Adds a new item to the cart
    addToCart: (state, action) => {

            const existingUser = state.cart.find((item)=> item.id === action.payload.id)
              
            if(existingUser){

                state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item ,qty:item.qty+1}:item)
               
                localStorage.setItem("cart" , JSON.stringify( state.cart ))
            }
            else{

              state.cart.push(action.payload);

              localStorage.setItem("cart" , JSON.stringify(state.cart) )
            }
              
        
    },
    // Removes an item from the cart by filtering it out Delete button
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);

      localStorage.setItem("cart" ,JSON.stringify(state.cart) )
    },


    // remove from local storage into cart 

      emptyCart :(state)=>{

           state.cart = [];

            localStorage.setItem("cart", JSON.stringify(state.cart))
      },

      // Increamnent an item to increase a qty through plus button

      increamentQty:(state,action)=>{

           state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item , qty:item.qty+1}:item)
           localStorage.setItem("cart" , JSON.stringify(state.cart ))
      },

      decreamentQty :(state , action)=>{
           
          state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item , qty:item.qty-1}:item)
          localStorage.setItem("cart" ,JSON.stringify(state.cart ))
      }
  },
});

// Export actions to use in components
export const { addToCart, removeFromCart , increamentQty , decreamentQty , emptyCart } = CartSlice.actions;

// Export the reducer to be added to the store
export default CartSlice.reducer;
