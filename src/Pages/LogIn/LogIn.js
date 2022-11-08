import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';

const LogIn = () => {

    const {signIn,setLoading} = useContext(AuthContex)

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          form.reset();
        //   setError('');
        //   navigate(from, {replace: true})
        })
        .catch(error => {
          console.error(error)
        //   setError(error.message);
        })
        
      }
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login Here!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
          
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>New to Travelbuzz <Link className='text-orange-600 bold' to="/register">Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default LogIn;