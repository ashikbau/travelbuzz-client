import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingelReview from '../SingelReview';

const ServiceDetails = () => {
    const {_id,service,img,description,price,rating} = useLoaderData();


    const[reviews,setReviews] = useState([])

   


    useEffect(()=>{
      fetch(`https://y-bay.vercel.app/reviews/${_id}`)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setReviews(data)
      })
      
      
  },[_id])
  

    return (
        <div>
            <section>
            <div className="card w-100 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {service}
      <div className="badge badge-secondary"><Link  to={`/review/${_id}`}>Please Review Here</Link></div>
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
            <section  className='grid grid-cols-1 md:grid-cols-3'>
              {
                
                  reviews.length>0?  reviews.map(review=><SingelReview key={review._id} review={review}></SingelReview>):'No reviews'
                }
              

            </section>
        </div>
    );
};

export default ServiceDetails;