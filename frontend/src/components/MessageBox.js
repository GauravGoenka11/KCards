import React from 'react'
//to see the error message stop the server and then we can see the error message


//we are setting props as parameter to access the childern of props 
export default function MessageBox(props) {
    return (
        //set class name to this javascript value
        //using alert class and alert - and value is based on props.variant inside template if exist use it or default avriant is info
        //u can see thet why we have use alert- in index.css file there is class alert-info and alert-danger
        <div className={`alert alert-${props.variant || 'info'}`}>
            {/* value we will show is props.childern it shows the content of message box in the place it has been used i.e in home scrren what ever we put in mesage box will be appraer here */}
            {props.children}
        </div>
    )
}
