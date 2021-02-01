import React from 'react'

export default function Rating(props) {
    // we are passing props bcz we want to read two values i.e. rating and numReview from props
    const { rating, numReviews } = props;

    return (
        <div className="rating">
            {/* in the below line of code we are going to display stars without any condition */}
            {/* <span><i className="fa fa-star"></i></span> */}

           {/* we are going to the star based on rating so we have to render the star icon conditionly */}
           {/* so inside classname we are wiritng if rating>=1 then 1st star then render (fa fa-star)  otherwise if rating>=0.5 then render half star ('fa fa-star-half-o') o stands for outline  otherwise it will be less then 0.5 then fa fa-star-o then is one star empty */}
    
           {/* here we have used ternary operator go to below link if confuse in the below syntax
           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */}
    
            <span><i className={rating >= 1 ? "fa fa-star" : rating >= 0.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>

        {/* same the above as we have doen we are doing for 2nd star and change 0.5 to 1.5 smae for 3,4,5 */}
            <span><i className={rating >= 2 ? "fa fa-star" : rating >= 1.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>

            <span><i className={rating >= 3 ? "fa fa-star" : rating >= 2.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>

            <span><i className={rating >= 4 ? "fa fa-star" : rating >= 3.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>

            <span><i className={rating >= 5 ? "fa fa-star" : rating >= 4.5 ? 'fa fa-star-half-o' : 'fa fa-star-o'}></i></span>

           {/* For numReview we will create other span and write numReview and contacating the review string */}
            <span>{numReviews + ' reviews'}</span>
        </div>

    )
}
