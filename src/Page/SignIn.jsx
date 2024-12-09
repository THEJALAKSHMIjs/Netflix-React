import React from 'react'
import './SignIn.css'
import netflix_logo1 from '../../src/assets/netflix_logo1.png'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <>
    <div className='h'>

      <div className='d-flex justify-content-between'>
        <img className='ms-5' src={netflix_logo1} height={'150px'} width={'250px'} alt="" />
        <Link to={'/'}><button className='ms-auto out-btn'><b>Sign Out</b></button></Link>
        </div>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
             <div className='sign  pt-5'>
                  <h2 className='text-start ps-5'><b>Sign In</b></h2>
                    <div className='text-center'>
                        <form  className='mt-4'>
                            <input className='input mb-3 rounded text-light' type="text" placeholder='Enter email or mobile number' />
                            <input className='input mb-3 rounded text-light' type="password" placeholder='Password' /><br />
                            <Link to={'/home'}><button className='sign-btn'><b>Sign In</b></button></Link>
                            <h5 className='text-center my-3'>OR</h5>
                            <button className='sign-btn2' >Use a sign-in-code</button>
                            <div className='text-start ps-5'>
                                <h6 className='my-3 text-center'>Forgot Password?</h6>
                                 <input type="checkbox" className='text-start me-2 text-light' />
                                 <label htmlFor="">Remember me</label>
                                 <h6 className='my-4'>New to netflix?<b>Sign up now</b></h6>
                                 <h6>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-primary'> Learn more.</span></h6>
                            </div>
                        </form>
                    </div>
             </div>
        </div>
        <div className="col-md-4"></div>
        
         
      </div>


      <div className="row sign-foot mt-5">
      <h6>Questions? Call 000-800-919-1694</h6>
       <div className="col-md-3 ps-5">
        
        <ul>
            <li>
                   FAX
            </li>
            <li>
              Cookie preferences
            </li>
        </ul>
       </div>
       <div className="col-md-3">
        <ul>
            <li>Help center</li>
            <li>Corporate Information</li>
        </ul>
       </div>
       <div className="col-md-3">
          <ul>
            <li>Terms of use</li>
           
          </ul>
       </div>
       <div className="col-md-3">
        <ul>
            <li>Privacy</li>
        </ul>
       </div>

      
      </div>
      
     
    </div>
   
    </>
  )
}

export default SignIn
