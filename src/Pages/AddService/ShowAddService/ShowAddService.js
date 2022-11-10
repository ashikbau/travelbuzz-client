import React from 'react';


const ShowAddService = ({ads}) => {
    const {name,email,message} = ads;
    
    

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    
    <h2 className="card-title">{name}</h2>
    <h2>{email}</h2>
    <p>{message}</p>
    
  </div>
</div>
    );
};

export default ShowAddService;