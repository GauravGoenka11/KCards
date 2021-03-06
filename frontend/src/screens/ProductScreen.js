import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import data from '../data'

export default function ProductScreen(props) {

    // product should be loaded from data.js
    // find is array function that find the element based on certieria that we define
    //  searching for x._id is the id of product inside the array 
    //  and comparing with props.match.params.id
    //props.match.params.id is the value that user enter in that route
    const product = data.products.find(x => x._id === props.match.params.id)
    // if product does not exist
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <div>
            <Link to="/">Back To Home</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li><h1>{product.name}</h1></li>
                        <li>
                            <Rating

                                rating={product.rating}
                                numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div class="row">
                                    <div>Price</div>
                                    <div className="price">₹{product.price}</div>
                                </div>
                            </li>

                            <li>
                                <div class="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                            <span className="success">In Stock</span>
                                        ) :
                                            (
                                                <span className="danger">Unavaiable</span >
                                            )}
                                    </div>
                                </div>
                            </li>

                            <li>
                                <button className="primary block">Add To Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
