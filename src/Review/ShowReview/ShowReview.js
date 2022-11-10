
import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';

const ShowReview = () => {
    const{user} = useContext(AuthContex);
    // console.log(user)
    const [reviews,setReviews] = useState({});

    useEffect(()=>{
        fetch(`https://y-bay.vercel.app/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setReviews(data)
        })
        
        
    },[user?.email])

    return (
        <div>
            <h1>you have : {reviews.length}</h1>
    
   
        </div>
    );
};

export default ShowReview;