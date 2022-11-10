import React, { useContext, useEffect, useState } from 'react';
import {   useParams } from 'react-router-dom';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';

const Edit = () => {
     const {id}=useParams()
     
    const[review,setReview] =useState({})
    
    
  
   
    const {user} = useContext(AuthContex);


    useEffect(()=>{
        fetch(`https://y-bay.vercel.app/review`,{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify({id})
        })
        .then(res=> res.json())
        .then(data => setReview(data))
        .catch(err=>console.log(err))

        

    },[id])





    


    

    const handleEdit = (event)=>{
        event.preventDefault();
       console.log('hi')
         const form=event?.target

       const editedReview={    
         ids:id, 
         service: form.service?.value,
         name: form.name?.value,
         email: user.email,
         message: form.message?.value,
         imageURL: user.imageURL

       }

       fetch(`https://y-bay.vercel.app/reviews/${id}`,{
        method:'PATCH',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(editedReview)

       })
       .then(res=>res.json())
       .then(data => console.log(data))
      

       .catch(err=>console.log(err))






        

        }
        


    
    
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <form onSubmit={handleEdit}>

            <input defaultValue={review?.service} type="text" name="service" placeholder="service" className="input input-bordered input-secondary w-full max-w-xs" />
            <input defaultValue={review?.name} type="text" name = "name" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" />
            <input defaultValue={user?.email} type="email" name="email" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" />
            <input defaultValue={user?.imageURL}  type="text" name="imageURL" placeholder="ImageUral" className="input input-bordered input-secondary w-full 
            max-w-xs" />
            <textarea   defaultValue={review?.message} name="message" className="textarea" placeholder="Message"></textarea>
            <button className="btn btn-wide">Edit </button>
            </form>
        </div>
    );
};

export default Edit;