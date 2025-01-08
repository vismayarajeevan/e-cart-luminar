import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// createAsyncThunk return promise
export const fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result);

    // save all data in session storage for view each detils
    sessionStorage.setItem("allProducts", JSON.stringify(result.data.products))
    return result.data.products
})



const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{

    },

    // to update reducers or update actions
    extraReducers:(builder)=>{

        // for fullfilled case
        builder.addCase(fetchProducts.fulfilled,(state, apiResult)=>{
        //    take states
         state.allProducts = apiResult.payload
         state.loading = false
         state.errorMsg =""
        })

        // for pending case
        builder.addCase(fetchProducts.pending,(state, apiResult)=>{
            //    take states
             state.allProducts = []
             state.loading = true
             state.errorMsg =""
            })

        // for rejected state
        builder.addCase(fetchProducts.rejected,(state, apiResult)=>{
         //    take states
            state.allProducts = []
            state.loading = false
            state.errorMsg ="API call failed"
        })
    }
})

export default productSlice.reducer