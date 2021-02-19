import React from 'react'

//to view this loading in the website 
//go to inspect-->Network-->There will is online change it to slow 3g
//then refersh the page
export default function LoadingBox() {
    return (
        <div>
            <i className="fa fa-spinner fa-spin"></i>Loading....
        </div>
    )
}
