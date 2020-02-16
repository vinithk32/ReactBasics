import React from "react";

function Product() {
    const ProductName = "redmi";
    const cost = 12000;
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if(hours < 12) {
        timeOfDay = 'Morning';
    } else if(hours < 4) {
        timeOfDay = 'Afternoon';
    } else {
        timeOfDay = 'Night';
    }
    return(
        <div>
            <span>model {ProductName} and cost is {cost}</span>
            <br></br>
            <span>Good {timeOfDay}</span>
        </div>
    );
}

export default Product;