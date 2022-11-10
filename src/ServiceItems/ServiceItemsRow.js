import React from 'react';

const ServiceItemsRow = (review) => {
    console.log(review)
    const{service,messeage} = review;
    return (
        <div>
            <h2>{messeage}</h2>
            
        </div>
    );
};

export default ServiceItemsRow;