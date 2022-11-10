import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAddService from './ShowAddService/ShowAddService';

const AddService = () => {
    const [service, setService] = useState({});
    const addServices = useLoaderData();
    console.log(addServices)

    const handleAddService = event =>{
        event.preventDefault();
        // console.log(service);

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('service added successfully');
                event.target.reset();
            }
        })
    }

    const handleInputBlur = event =>{
        
    }

    return (
        <div>
            
            <h2>Please add a new User</h2>
            <form className='' onSubmit={handleAddService}>
                <input className='border-solid' onBlur={handleInputBlur} type="text" name='name' placeholder='Service Name' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='personName' placeholder='Your Name' required />
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" id="" placeholder='Your Email' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="message" id="" placeholder='Your message' required />
                <br />
                <button type="submit">Add User</button>
            </form>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-5'>
            {
                  addServices?.length> 0? addServices.map(ads=> <ShowAddService key={ads._id}
                    ads={ads}
                  
                  ></ShowAddService>):'no addservice'
                    

                  
                }
            </div>
           
           
        </div>
    );
    }

export default AddService;