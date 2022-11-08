import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceItems = ({ser}) => {
    console.log(ser)
    const {_id,service,rating,price,description,img} = ser
    return (
        <div className="card w-96 mr-4 my-4 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <PhotoProvider>
      <PhotoView src={img}>
      <img src={img} alt="Shoes" className="rounded-xl" />
      </PhotoView>
    </PhotoProvider>
    
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{service}</h2>
    <p>{description}</p>
    {/* <button>more</button>
    <p>{description.slice(101,200)}</p> */}
    <div className="card-actions">
     <Link to={`/services/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
    <div className='flex justify-between gap-8'>
        <p>price : {price}</p>
        <p>rating : {rating}</p>
    </div>
  </div>
</div>
    );
};

export default ServiceItems;