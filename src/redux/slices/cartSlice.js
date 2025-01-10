import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        // action name and define reducer function
        addToCart:(state, actionByComponent)=>{
            // check is already present or not
            const existingProduct = state.find(item=>item?.id == actionByComponent.payload.id)
            if(existingProduct){
                // update quantity and price
                existingProduct.quantity++
                existingProduct.totalPrice= existingProduct.quantity * existingProduct.price
                // to find  products
                const remainingProducts =state.filter(item=>item.id != existingProduct.id)
                // add remaining product and existing product in cart
                state = [...remainingProducts, existingProduct]

            }else{
                // create two states, for quantity and price and push to state
                
                state.push({...actionByComponent.payload, quantity:1, totalPrice:actionByComponent.payload.price})
            }
        },

        // create an action to increase the quantity of product
        incrementQuantity:(state,actionByCart)=>{
            const existingProduct = state.find(item=>item?.id == actionByCart.payload.id)
            if(existingProduct){
                // update quantity and price
                existingProduct.quantity++
                existingProduct.totalPrice= existingProduct.quantity * existingProduct.price
                // to find  products
                const remainingProducts =state.filter(item=>item.id != existingProduct.id)
                // add remaining product and existing product in cart
                state = [...remainingProducts, existingProduct]

            }else{
                // create two states, for quantity and price and push to state
                
                state.push({...actionByComponent.payload, quantity:1, totalPrice:actionByComponent.payload.price})
            }
        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer