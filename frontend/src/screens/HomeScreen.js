import React, { useEffect, useState } from 'react'
// we are importing this product and data bcz we have used it home screen
//we are using .. bcz homescreen is screen folder but product and data are in src so we have to go to folder back
import axios from 'axios';

import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
//here we have imported the data.js for dyamically display of data 



// after importing axios we don't require static data
// so we have deleted 
// import data from '../data'
//NOW WE CAN SEE THE DATA COMING FROM BACKEND
//BY GOING TO INSPECT-->NETWORK-->NAME-->PRODUCTS THEN WE CAN SEE ALL THE PRODUCTS

export default function HomeScreen() {
    // define react hook for state we have to also import usestate
    const [products, setProducts] = useState([]);

    //WE HAVE GOING TO CREATE THE HOOK FOR LOADING THE PAGE
    //we have set default as false because by default we are not laoding
    const [loading, setLoading] = useState(false);

    //hook for error
    //by default error is false because there is no error
    const [error, setError] = useState(false);

    //     to fill the product we will useeffect function 
    //    useeffect is another hook that happen when component did mount to our webpage i.e after rendering the component its function will run

    // useeffect accept two parameter one is function and second parameter is array 
    // this array accept the list of dependecies in below code there is no dependecies
    //after rendering the component the useeffect function run only once that what we excatly want
    //in this function what we are going to do is that send that ajax request to backend and fetch product from there
    //to sent the ajax request we are going to define the  function to fetch data
    useEffect(() => {
        // this function is async function bcz ajax request is async operation
        const fetchData = async () => {


            //to catch the error we are wrapping the ajax request inside try catch block
            try {
                //use setloading before sending the ajax request and set it to true
                setLoading(true);
                //fetch data from axios request put await before axios and called get method of axios and address of api
                //by running below line  this the array in backend will be transform to data in frontend
                //the below line is ajax request
                const { data } = await axios.get('/api/products');

                //after loading set it to false
                setLoading(false);

                //setting products to data that we are getting from backend
                setProducts(data);
            }
            catch (err) {
                //get the error as parameter
                //and seterror to err.message 
                //also loading as false bcz we dont have to show loading any more
                setError(err.message);
                setLoading(false);
            }
        };
        //    to make function work we have to call the fetchData function
        fetchData();
    }, [])



    return (
        <div>
{/* before rendering list of product i will checkloading
 if loading is true then render Loading Box component
otherwise error  if error exist then render Mesaage box componet and inside message box we will show the eror
otherwise if there is no loading and no error it time to render the product then load the product so we have put the below code in there part of if else */}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) :
                error ? (
                    <MessageBox varaiant="danger"> {error} </MessageBox>
                ) : (
                        <div className="row center">

                            {/* we are keeping only one div with card and remove all other nine card bcause it will craete statioc website 
    so we are taking data daynamically using map function from data.js  */}


                            {/* we are using curly barces
        using map function to convert js product items to html elemts
         for each product we convert them to the below div in the map */}
                            {/* {data.products.map(product => ( */}

                            {/* now our data is coming from backend so we will remove data from data.product */}
                            {products.map((product) => (
                                // we create product component inside product.js and pass product object as product
                                // so each product inside products array is goin to be pass to product component and to access we require product object
                                // the fisrt elemt after map should have a key and key should be set the unique value
                                // we also need to import the product component in app.js
                                <Product key={product._id} product={product}></Product>

                            ))}
                        </div>

                    )
            }
        </div >

    );
}


//before but it in if else it was like this
/* <div className="row center">
    {products.map((product) => (
        <Product key={product._id} product={product}></Product>
    ))}
</div>
)}
</div >
);
}  */