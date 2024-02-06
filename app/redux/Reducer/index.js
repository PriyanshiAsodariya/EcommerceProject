import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import SubCategorySlice from "../slice/SubCategorySlice";
import  productSlice  from "../slice/ProductSlice";
import CategorySlice from "../slice/CategorySlice";



export const rootReducer = combineReducers({
    counter : counterReducer,
    subcategory : SubCategorySlice,
    Product : productSlice,
    Category : CategorySlice
})