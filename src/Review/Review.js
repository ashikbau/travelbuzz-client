import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';


import { AuthContex } from '../contex/AuthProvider/AuthProvider';

const Review = () => {
    
    const {user} = useContext(AuthContex);
const {service,_id} = useLoaderData();

    const handlePlaceReview = event=>{
        event.preventDefault();
        const form = event.target;
        const service = form.service.value;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const imageURL = form.imageURL.value;
        
        const message = form.message.value;

        const review = {
            ids:_id,
            service,
            name,
           email,
            message,
            imageURL
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.acknowledged){
                    alert('review placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }
    
    

    return (
        <div>
            
            <form onSubmit={handlePlaceReview}>
            <h1>Please write your review about :{service}</h1>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="service" type="text" placeholder="Service Name" 
                     className="input input-ghost w-full  input-bordered" />
                    <input name="name" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered" />
                    <input name="imageURL" type="text" placeholder="Your Photo" defaultValue={user?.imageURL} className="input input-ghost w-full  input-bordered"  />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Place Your Review" />
            </form>

            
        </div>
    );
};

export default Review;