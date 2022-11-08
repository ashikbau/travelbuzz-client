import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../../../contex/AuthProvider/AuthProvider';
import {  FaUser } from "react-icons/fa";

const Header = () => {
  const {providerGoogleLogin,logOut,user} = useContext(AuthContex)
  const googleProvider = new GoogleAuthProvider();
  const  handleGoogleSignIn =()=>{
    providerGoogleLogin(googleProvider)
    .then(result=>{
        const user = result.user;
        console.log(user);

    })
    .catch(error =>console.error(error))
}

const handleLogOut = () => {
  logOut()
      .then(() => { })
      .catch(error => console.error(error))
}

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/home'>Home</Link></li>
        <li tabIndex={0}>
          <Link className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          
          
        </li>
        <li><Link>Item 3</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">TravelBuzz</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     <li>
     <Link className='mx-2' to='/'>Home</Link>
           
            <Link className='mx-2' to='/blog'>Blog</Link>
            
            <Link className='mx-2' to='/login'>LogIn</Link>
            <Link className='mx-2' to='/register'>Register</Link>
            
     </li>
      <li tabIndex={0}>
       
      
            <NavLink href="#deets">
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} variant="light" >Log out</button>
                  </>
                  :
                  <>
                    <Link className='mx-2' to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }


            </NavLink>
            <NavLink eventKey={2} href="#memes">
              {user?.photoURL ?
                <image
                  style={{ height: '30px' }}
                  roundedCircle
                  src={user?.photoURL}
                  
                  >

                </image>
                : <FaUser></FaUser>
              }

            </NavLink>
        

         
      </li>
     
    </ul>

  </div>
  
  <div className="navbar-end">
    <Link  onClick={handleGoogleSignIn} className="btn">Google LogIn</Link>
  </div>
</div>
        </div>
    );
};

export default Header;