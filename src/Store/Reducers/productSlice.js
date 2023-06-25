import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        product: []
    },
    reducers: {
        fetchingProduct(state, action) {
            state.product.push(...action.payload)
        }
    }
})
export default productSlice.reducer
export const {fetchingProduct} = productSlice.actions

export const getProduct = () => {
    return async (dispatch) => {
        const res = await fetch(`https://fakestoreapi.com/products`)
        const data = await res.json()
        dispatch(fetchingProduct(data))
    }
}