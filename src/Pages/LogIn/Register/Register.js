import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../contex/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {

  const{createUser,updateUserProfile}= useContext(AuthContex);
  const [error,setError] = useState('');
  useTitle('register')

  const handleSubmit = event => {

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      form.reset();
      setError('');
      handleUpdateUserProfile(name,photoURL)
    })
    .catch(error => {
      console.error(error)
      setError(error.message)
    
    })

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }

      updateUserProfile(profile)
          .then(() => { })
          .catch(error => console.error(error));
  }

   
    }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      <div className="text-center ">
        <h1 className="text-5xl font-bold">Register Here</h1>
        <p className="py-6"></p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit}  className="card-body">
          
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="your email" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="your email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
             
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
  
          </div>
          <div className='text-danger'>
           {error}
          </div>
        </form>
        <p>Already have an Account <Link className='text-orange-600' to="/login">LogIn</Link></p>
      </div>
    </div>
  </div>
  );
};

export default Register;