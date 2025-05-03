import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from '.features/product.js';
import cartReducer from './features/cart';
import categoryReducer from './features/category';


const rootReducter = combineReducers({
    productState: productReducer,
    cartState: cartReducer,
    categoryState: categoryReducer
})

const store = configureStore({
    reducer: rootReducter
})

export default store;