import React from 'react'
import './SignUp.css'
import netflix_logo1 from '../../src/assets/netflix_logo1.png'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='try'>
      <img className='ms-1 upLog' src={netflix_logo1} height={'150px'} width={'250px'} alt="" />
      <hr />

      <div className="row mt-5 p-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h6>STEP  1  OF  3</h6>
          <h3><b>Welcome back!</b> <br />
          <b>Joining Netflix is easy.</b></h3>
           <h5>Enter your password and you'll be watching in no time.</h5>

           
           <form action="">
            <input className='up-inp mb-3' type="text" placeholder='Enter your password' />
            <a className='text-primary' style={{textDecoration:'none'}}  href=""><b>Forgot your password?</b></a><br />
            <Link to={'/signIn'}><button className=' up-btn text-light mt-3 fs-4' type='button'><b>START</b></button></Link>
           </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  )
}

export default SignUp
