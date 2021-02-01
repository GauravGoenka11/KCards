import React from 'react';
import Product from './components/Product';
//here we have imported the data.js for dyamically display of data 
import data from './data';
function App() {
  return (
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
        <div>
          {/* we are keeping only one div with card and remove all other nine card bcause it will craete statioc website 
        so we are taking data daynamically using map function from data.js */}
          <div className="row center">
            {
              // we are using curly barces
              // using map function to convert js product items to html elemts
              //  for each product we convert them to the below div in the map
              data.products.map(product => (
                // we create product component inside product.js and pass product object as product
                // so each product inside products array is goin to be pass to product component and to access we require product object
                // the fisrt elemt after map should have a key and key should be set the unique value
                // we also need to import the product component in app.js
                <Product key={product._id} product={product}></Product>

              ))
            }
          </div>
        </div>
     
      </main>
      {/* <!-- Footer --> */}
      <footer className="row center">
        All right reserved
        </footer>
    </div>
  );
}

export default App;
