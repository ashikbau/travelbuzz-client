import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

  const services = useLoaderData();
  console.log(services)
  
 
    return (
  <div >
 
    <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img alt='' src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">I am Looking Looking forward to <br />finally meet you</h1>
      <p className="py-6">I am excited to be guide you during your travel. I  have been working as a tour guide for the past five years. I love sharing my knowledge of history with others and making history come alive for visitors.</p>

      <div>
    <h4 className='text-2xl'>My Services</h4>
    {
      services.map(service => <p key="service_id" >{service.service}</p>)
    }
  </div>
      <Link to='/servicess' ><button className="btn btn-primary">See All</button></Link>
    </div>
  </div>
  
</div>
  </div>
    );
};

export default Home;