import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItems from '../ServiceItems/ServiceItems';

const Services = () => {
    const services = useLoaderData();
    return (
    <div>
         {
            services.map(ser => <ServiceItems
            key={ser._id}
            ser = {ser}
            ></ServiceItems>)
         }   
        </div>
    );
};

export default Services;