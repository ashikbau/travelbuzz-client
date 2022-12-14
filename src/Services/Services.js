import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import ServiceItems from '../ServiceItems/ServiceItems';

const Services = () => {
    const services = useLoaderData();
    useTitle('Services')
    return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
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