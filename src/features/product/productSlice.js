import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    activeProduct: {},
    cartItem: []
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
        },
        setActiveProduct: (state, action) => {
            state.activeProduct = action.payload;
        },
        setCartItem: (state, action) => {
            state.cartItem = action.payload;
        }
    }
})
export const selectProducts = (state) => state.product.products
export const selectActiveProduct = (state) => state.product.activeProduct
export const selectCartItem = (state) => state.product.cartItem
export const { setProduct, setActiveProduct, setCartItem } = productSlice.actions
export default productSlice.reducer