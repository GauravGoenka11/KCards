import React from 'react';
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
        {/* we are keeping only one div with card and remove all other nine card bcause it will craete statioc website 
        so we are taking data daynamically using map function from data.js */}
        <div className="row center">
          {
            // we are using curly barces
            // using map function to convert js product items to html elemts
            //  for each product we convert them to the below div in the map
            data.products.map(product => (
              // set key to product._id 
              // when we used map in react application first element after maps hould have the key attribute nd the value of the key should be different 
              // so we are setting the it to product._id bcz all id are unique
              <div key={product._id} className="card">

                {/* changing the href daynamically so not using the below line */}
                {/* <a href="product.html"> */}

                {/* changing href in {} bcz we are insert dyanmic data it is in `` 
            we setting the url of this image to the product of this specific id */}
                <a href={`/product/${product._id}`}>

                  {/* <!-- image size should be 680px * 830px --> */}
                  {/* to update img dynmically we r not using below line */}
                  {/* <img className="medium" src="./images/product-1.jpg" alt="product" /> */}

                  {/* to update img dynamically we are using below line */}
                  <img className="medium" src={product.image} alt={product.name} />

                </a>
                <div className="card-body">

                  {/* similary we are changing the href of name also bcz img and name should link to same location */}
                  <a href={`/product/${product._id}`}>
                    {/* now here it is the static name so we are not using this */}
                    {/* <h2>Happy Birthday Card</h2> */}
                    {/* to import data dyanmically we are using below code */}
                    <h2>{product.name}</h2>

                  </a>
                  <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                  </div>

                  {/* in the below line we r updating price data statically */}
                  {/* <div className="price">₹250</div> */}

                  {/* To update the data udynamically we are using the below line*/}
                  <div className="price">₹{product.price}</div>
                </div>
              </div>
            ))
          }

        </div>
{/* This is how it all lokks in static website each card 
        <div class="card">
                    <a href="product.html">
                        <!-- image size should be 680px * 830px -->
                        <img class="medium" src="./images/product-2.jpg" alt="product" />
                    </a>
                    <div class="card-body">
                        <a href="product.html">
                            <h2>Happy Birthday Card</h2>
                        </a>
                        <div class="rating">
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <!-- in the below star icom we ave used fa-star-o for empty star -->
                            <span><i class="fa fa-star-o"></i></span>
                        </div>
                        <div class="price">
                            ₹250
                        </div>
                    </div>
                </div>
 */}

      </main>
      {/* <!-- Footer --> */}
      <footer className="row center">
        All right reserved
        </footer>
    </div>
  );
}

export default App;
