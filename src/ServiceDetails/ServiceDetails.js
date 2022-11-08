import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {service,img,description,price,rating} = useLoaderData();
    return (
        <div>
            <section>
            <div className="card w-100 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {service}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      
    </div>
    <div className='flex justify-between gap-8'>
        <p>price : {price}</p>
        <p>rating : {rating}</p>
    </div>
  </div>
</div>

            </section>
            <section>

            </section>
        </div>
    );
};

export default ServiceDetails;