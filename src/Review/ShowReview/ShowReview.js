import React, { useContext, useEffect, useState } from 'react';

const ShowReview = () => {
    const{user} = useContext();
    const [showReview,setShowReview] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/showreview?email=${user.email}`)
        .then(res => res.json())
        .then(data => setShowReview(data))
    },[user?.email])

    return (
        <div>
            <h1>you have : {showReview.length}</h1>
        </div>
    );
};

export default ShowReview;