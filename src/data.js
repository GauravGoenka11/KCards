// data.js is the source of products
// we are defining the data 
// data is the object 
// in this object we are going to define the products array using square braket 
// inside that we are going create product object  in that we will set the information
const data = {
    products: [
        // product object
        {
            _id: '1',
            name: 'Happy Birthday Card',
            category: 'Birthday',
            image: '../images/product-1.jpg',
            price: 200,
            //countInStock is used in Product Screen to display whethere the product is availabele or not
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Card',
        },
        {
            _id: '2',
            name: 'Love Card',
            category: 'Love',
            image: '../images/product-2.jpg',
            price: 220,
            countInStock: 0,
            rating: 4.5,
            numReviews: 15,
            description: 'High Quality Card',
        },
        {
            _id: '3',
            name: 'Valentine Card',
            category: 'Valentine',
            image: '../images/product-3.jpg',
            price: 250,
            countInStock: 20,
            rating: 4.5,
            numReviews: 15,
            description: 'High Quality Card',
        },
        {
            _id: '4',
            name: 'Happy Birthday',
            category: 'Birthday',
            image: '../images/product-4.jpg',
            price: 270,
            countInStock: 15,
            rating: 4.5,
            numReviews: 13,
            description: 'High Quality Card',
        },
        {
            _id: '5',
            name: 'Love Card',
            category: 'Love',
            image: '../images/product-5.jpg',
            price: 300,
            countInStock: 5,
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Card',
        },
        {
            _id: '6',
            name: 'Valentine Card',
            category: 'Valentine',
            image: '../images/product-6.jpg',
            price: 120,
            countInStock: 6,
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Card',
        },
        {
            _id: '7',
            name: 'Happy Birthday',
            category: 'Birthday',
            image: '../images/product-7.jpg',
            price: 150,
            countInStock: 2,
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Card',
        },
        {
            _id: '8',
            name: 'Best Wishes Card',
            category: 'Best Wishes',
            image: '../images/product-8.jpg',
            price: 180,
            countInStock: 6,
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Card',
        },
        {
            _id: '9',
            name: 'Happy Birthday',
            category: 'Birthday',
            image: '../images/product-9.jpg',
            price: 220,
            countInStock: 4,
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Card',
        },
        {
            _id: '10',
            name: 'Valentine Card',
            category: 'Valentine day',
            image: '../images/product-10.jpg',
            price: 300,
            countInStock: 8,
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Card',
        },

    ]
}

// we are exporting the data bcz we are importing it in app.js
export default data;