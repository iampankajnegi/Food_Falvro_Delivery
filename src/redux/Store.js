import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/Cartslice"; // Fixed the casing to be consistent
import CategorySlice from "./slice/CategorySlice";
import SearchSlice from "./slice/SearchSlice";
import ThemeSlice from  "./slice/ModeSlice"
 
const Store = configureStore({
  reducer: {
    cart: CartSlice, // Assigning the CartSlice reducer to 'cart'
    category : CategorySlice,
     search : SearchSlice,
     theme : ThemeSlice,
  },
});

export default Store;
