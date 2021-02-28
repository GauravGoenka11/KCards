//first we have created the constant and then now we are creating the actions
import axios from "axios";
import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants/productConstants"

export const listProducts=() =>async(dispatch)=>{
    //dispatch accept the object 
    //dispatch is a action
    dispatch({
        type:PRODUCT_LIST_REQUEST,

    });
//fetching data from backend so we are putting that in try catch so that if error then it will be mange by catch
    try{
        const { data } = await axios.get('/api/products');
        //payload should contain data from backend
        dispatch({type:PRODUCT_LIST_SUCCESS,payload: data});

    }
    catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,payload:error.message});
    }
}