import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./Reducers/productSlice"
import TodoReducer from "./Reducers/todoSlice"

export const store = configureStore({
    reducer: {
        todos: TodoReducer,
        products: ProductSlice
    }
}
)















