import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';

const Login = () => {
    //destructuring hooks
    const {signInUsingGoogle, signInUsingGithub, signInUsingFacebook, signInUsingTwitter, user, error, handleLoginSubmitBtn, handleEmailChange, handlePasswordChange, logout } = useAuth();
     
    return (
        <div>
            { !user.email ? <h3 className='pt-5'>User Login</h3> 
            :
            <div className="">
                <h3 className='pt-5'>Welcome, <span className='text-success'>{user.displayName}</span></h3>
            </div>
            }

            <hr className='w-25 mx-auto'/>

            { !user.email ?
                <div className="">
                    <form className='w-75 mx-auto' onSubmit={handleLoginSubmitBtn}>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input onChange={handleEmailChange}  type="email" className="form-control" id="inputEmail3" placeholder='Enter your email' required/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input onChange={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder='Enter your password' required/>
                            </div>

                            <br />
                            <p className='text-danger'>{error}</p>
                        </div>
                        <button type="submit" className="btn btn-secondary">Login</button>
                    </form>
                    {/* <button className='btn btn-secondary p-2 mt-3'><Link className='text-decoration-none text-white' to="/forgotpassword"><u>Forgot Password?</u></Link></button> */}
                    <br />
                    <Link className='text-decoration-none text-white p-2 mt-5' to="/forgotpassword"><u><button className='btn btn-secondary'>Forgot Password?</button></u></Link>

                    
                    <p className='m-4'>Or</p>

                    <button onClick={signInUsingGoogle} className='btn btn-danger p-2 m-3'>Google Login</button>

                    <button onClick={signInUsingFacebook} className='btn btn-primary p-2 m-3'>Facebook Login</button>

                    <button onClick={signInUsingGithub} className='btn btn-dark p-2 m-3'>GitHub Login</button>

                    <button onClick={signInUsingTwitter} className='btn btn-info p-2 m-3'>Twitter Login</button>

                    <br />
                    <h5>{error}</h5>
                    <br /> 

                    {/* <button className='btn btn-success p-2 m-3'><Link className='text-decoration-none text-white' to="/register"><u>New User? Click to Register!</u></Link></button> */}

                    <Link className='text-decoration-none text-white m-2' to="/register"><u><button className='btn btn-secondary p-2 m-3'>New User? Click to Register!</button></u></Link>
                </div>
                :
                <div className="mb-5">
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                    <br /> <br /> <br />
                    {/* <button className='btn btn-secondary p-2 mt-3'><Link className='text-decoration-none text-white' to="/completeprofile"><u>Complete Profile</u></Link></button> */}

                    <Link className='text-decoration-none text-white m-2' to="/completeprofile"><u><button className='btn btn-secondary'>Complete Profile</button></u></Link>

                    <Link className='text-decoration-none text-white m-2' to="/login"><u><button onClick={logout} className='btn btn-danger'>Logout</button></u></Link>
                </div>
            }


            
        </div>
    );
};

export default Login;