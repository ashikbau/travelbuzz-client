// import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../contex/AuthProvider/AuthProvider';
import ShowMyReview from '../ShowMyReview/ShowMyReview';


const MyReview = () => {

    const navigate=useNavigate()
    const{user} = useContext(AuthContex);
   
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)


        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setReviews(data)
        })
        
        
    },[user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rvr => rvr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }


    const handleEditReview = id => {
        navigate(`/edit/${id}`)
        

        // fetch(`http://localhost:5000/reviews/${id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json',
               
        //     },
        //     body: JSON.stringify({ status: 'Approved' })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount > 0) {
        //             const remaining = reviews.filter(rvr => rvr._id !== id);
        //             const approving = reviews.find(rvr => rvr._id === id);
        //             approving.status = 'Approved'

        //             const newOrders = [approving, ...remaining];
        //             setReviews(newOrders);
        //         }
        //     })
    }


    return (
        <div>
            <h2 className="text-5xl">You have {reviews.length} Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Reviewer Information</th>
                            <th>Service Name And Reviewer Message</th>
                            
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { reviews.length>0?reviews.map(review => <ShowMyReview
                                key={review._id}
                                review={review}
                                handleDelete = {handleDelete}
                                handleEditReview = {handleEditReview}
                                
                            ></ShowMyReview>):'No reviews Avaialable'
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>

//         <div>
//             <h1>you have : {reviews.length}</h1>
//             <div className="overflow-x-auto w-full">
//   <table className="table w-full">
    
//     <thead>
//       <tr>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Favorite Color</th>
//         <th></th>
//       </tr>
//     </thead>
//     <tbody>
      
   
 
//     {
//         reviews.map(review =><ShowMyReview
        
//         key={review?._id}
//         review={review}
//         >

//         </ShowMyReview>)
//      }
         
      
      
//     </tbody>
    
    
    
//   </table>
// </div>
//         </div>
    );
};

export default MyReview;