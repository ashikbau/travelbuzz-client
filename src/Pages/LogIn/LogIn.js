import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const LogIn = () => {

    const {signIn,setLoading} = useContext(AuthContex)
    useTitle('login')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event)=>{

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
          const user = result.user;
           const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // get jwt token
                fetch('https://y-bay.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('travelbuzz-token', data.token);
                        navigate(from, { replace: true });
                    });
                
            })
            .catch(error => console.log(error));
        
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