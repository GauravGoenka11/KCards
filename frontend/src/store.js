//to create redux store 
// to create redux store we require two things
// initial state and reducer

//this redux store it just return list of products in data.js in frontend
//import data from "./data";
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from "./reducers/productReducer";

//DEFINING INITAIL STATE
const initialState = {};

// reducer accept two parameter state and action
 //we are updating the reducer instead of having static product from frontend we will use combine reducers
 //so we are commenting this part that is removing the below part
// const reducer = (state, action) => {
//     //return new state i.e products from data.products and import data
//     return { products: data.products };
// };

const reducer = combineReducers({
 productList:productListReducer,
});


//adding redux chrome devloper tool we need to update compose function
//so for that we are defining composeEnhancer
//we are writing this "||" because if it doesnot exist then use compose from redux
//so that that we have to change compose to compose Enchaner
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating the store
//store acept reducer and initial state
//we are dleteing below line because we are adding redux thunk to it
//const store=createStore(reducer,initialState);

//to see the redux store in chrome browser we have to search react dev tools and install the the extension of redux dev tools
// after that right click and inspect and go to redux tab
// there you will see no store found so for that we have to add some code to that
//we have to install npm i redux-thunk "REDUX THUNK MAKE IT POSSIBLE TO SEND AJAX REQUEST IN OUR REDUX ACTION"

//now we are adding 3rd parameter for thunk
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
//we have change compose to compose Enchancer 
//after that reload the page then u will not see no store found
//then in that if u click state then it will show all product
export default store;

//to use this we have to wrap this store in index.js
//inside the provider and set store as property 

