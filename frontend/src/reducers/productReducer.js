//1st -->constant
//2nd-->action
//3rd-->reducer
//we need reducer to respond to the actions that we have created in action
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

//we have set state to default state that is product to empty array we don't set then we will get the error
//here we are also setting loading default as true we are adding this because if user click on the product and then goes back then loading should be true there should not be any error
export const productListReducer=(state={loading:true,products: [] },action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            //we neeed to return new state for new state we are setting loading to true beacause when we dipatch the request action i am sending ajax to backend and waiting for response
            return {loading:true};
            case PRODUCT_LIST_SUCCESS:
                //fetch the product which is variable in redux store by the data that we get from backend
                return {loading:false,products:action.payload};
             case PRODUCT_LIST_FAIL:
                return {loading:false,error:action.payload};
         default:
             //return previous state
             return state;   
    }
}