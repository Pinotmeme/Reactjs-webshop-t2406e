import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './features/products'
import cartReducer from './features/cart';
import categoryReducer from './features/category';
import commonReducer from './features/common';


const rootReducer = combineReducers({
    productState: productReducer,
    cartState: cartReducer,
    categoryState: categoryReducer,
    commonReducer: commonReducer
})

const store = configureStore({
    reducer : rootReducer
})

export default store;