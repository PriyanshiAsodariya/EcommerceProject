import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading : false,
    cart : [],
    error : null
}

export const cartslice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addtoCart :(state , action) =>{
            console.log("payyyyyyyyyyyyyyyyyyyyyyy",action.payload);

            const itemAvilableindex = state.cart.findIndex((v)=> v.id === action.payload);

            if(itemAvilableindex === -1){
                state.cart.push({id : action.payload , quantity  : 1})
            }else{
                state.cart[itemAvilableindex].quantity ++;

            }

            console.log(itemAvilableindex);
            console.log(state.cart);
        }
    }
})

export const {addtoCart}  = cartslice.actions;
export default cartslice.reducer