import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// we have imported homescreen and productscreen
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
//we are commenting the below import bcz it is not needed in app.js we r moving it to homescreen
// import Product from './components/Product';
// //here we have imported the data.js for dyamically display of data 
// import data from './data';
function App() {
  return (
    /* by installing react-router-dom we can define multiple route for our web application  and for each route a specific screen response to it*/
    <BrowserRouter>
      <div className="grid-container">
        {/* <!-- Header --> */}
        <header className="row">
          <div>
            <a className="brand" href="/">K Cards</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        {/* <!-- Main Content --> */}
        <main>
          {/* we r define route */}
          {/* :id is a paramenter and conatin the id of the product 
          when user enter the address in the below format then productScreen will be rendered */}
          <Route path="/product/:id" component={ProductScreen}></Route>
          {/* we need to create Home screen component 
          we have set exact attribute that means the path is exactly equal to the path */}
          <Route path="/" component={HomeScreen} exact></Route>
        </main>


        {/* <!-- Footer --> */}
        <footer className="row center">
          All right reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
