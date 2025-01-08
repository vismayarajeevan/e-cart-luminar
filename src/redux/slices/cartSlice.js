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

            }else{
                // create two states, for quantity and price
                // 
                state.push({...actionByComponent.payload, quantity:1, totalPrice:actionByComponent.payload.price})
            }
        }
    }
})