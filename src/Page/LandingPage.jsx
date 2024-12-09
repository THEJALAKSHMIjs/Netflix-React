import React from 'react'
import './Landing.css'
import netflix_logo1 from '../assets/netflix_logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function LandingPage() {
    return (
        <div className='container-fluid '>
          <div className='d-flex justify-content-between sticky-top'>
                <div className="ms-5 mt-3 logo-custom">
                <img className='logo' src={netflix_logo1} alt="netflix_logo" />
                </div>

                <div className="me-4 mt-3">
                    <Link to={'/signIn'}><button type="button" className="btn btn-danger ps-4 pe-4">Sign In</button></Link>
                </div>
            </div>

            

            <div className='d-flex justify-content-center align-items-center home-content w-100 background-banner'>
                <div className='home text-white'>
                    <h1 className="heading-custom">Unlimited movies ,TV <br />  shows and more.</h1>
                    <h4 className="text-center mt-3">Watch anywhere. Cancel anytime.</h4>
                    <p className="fw-bold">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='input-group mb-3 ms-3 mt-4 input-div'>

                        <input type="text" id="channel" className="form-control p-3 ms-2" placeholder="Email address"
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    
                        <Link to={'/signUp'} style={{textDecoration:'none'}}>
                            <button 
                            className="button input-group-text bg-danger text-white fw-bold ms-3 " id="basic-addon2"><h1 className='p-1 fs-5'>Get started <FontAwesomeIcon icon={faArrowRight} /></h1></button>
                        </Link>

                  </div>
            </div>
        </div>
    


<div className="container-fluid bg-black text-white second-content mt-4 pt-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12 mt-5 ">
                    <h2 className="fs-1 fw-bold  pt-5">Enjoy on your TV.</h2>
                    <p style={{fontSize: '25px'}}>Watch on smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple TV, Blu-ray
                        players and  more.</p>
                </div>
                <div className="col-lg-6 col-12 mt-5 p-5 ps-5 " style={{width:'460px'}}>
                    <img className="netflix-content" src="https://i.pinimg.com/originals/cb/5a/a2/cb5aa27fb463e601f132e6fba4a05ce0.gif" alt="" width="10" height="150" />
                    {/* <video className='mt-5'  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"  controls autoPlay></video> */}
                </div>
            </div>
        </div>
    </div>



    <div className="container-fluid bg-black text-white third-content">
        <div className="container">
            <div className="row mt-3 pt-5">
                <div className="col-lg-6 col-12 mt-5 netflix-content">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className="ms-5 " width="100" height="100" alt="banner" />
                    
                </div>
                <div className="col-lg-6 col-12" style={{marginTop:'130px'}}>
                    <h1 className='pt-5'>Download your shows <br /> to watch offline.</h1>
                    <p className="fs-4">Stream unlimited movies and TV shows on <br /> your phone, tablet, laptop, and TV.</p>
                </div>
            </div>

        </div>
    </div>



    <div className="container-fluid bg-black text-white forth-content">
        <div className="container">
            <div className="row mt-3 pt-5">
                <div className="col-lg-6 col-12" style={{marginTop:'130px'}}>
                    <h1 className="ms-5">Create profiles for <br /> children.</h1>
                    <p className="fs-4 ms-5">Send children on adventures with their  favourite characters in a space
                        made just for them free with your membership. </p>
                </div>
                <div className="col-lg-6 col-12 mt-3">
                    <img src="https://s1.gifyu.com/images/NETFLIX_ACCTRANSFER_GIF_EN_US_v1.gif" alt="image" class="netflix-content" height="100"/> 
                </div>
            </div>
        </div>
    </div>




    <footer className="bg-dark text-white pt-5 pb-5 " id="footer">
        <div className="container">
            <div className="row p-5">
                {/* <div className="col-md-2 ">
                    <img src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" alt="Logo" width="120" height="40"
                        className="d-inline-block netflix-content align-text-top" />
                    
                </div> */}
                <div className="col-md-4 footer-small">
                    <div className="footer-section">
                        <ul>
                            <li> FAQ</li>
                            <li>Investor Relations</li>
                            <li>Privacy</li>
                            <li>Blog</li>
                            <li>Speed Test</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 footer-small">
                    <div className="footer-section">
                        <ul>
                            <li> Help Center</li>
                            <li>Cookie preference</li>
                            <li>Jobs</li>
                            <li>Legal Notices</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 footer-small">
                    <div className="footer-section">
                        <ul>
                            <li> Account</li>
                            <li>Ways To Watch</li>
                            <li>Only on Netflix</li>
                            <li>Contact Us </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="developer-custom text-center">Netflix India  <div class="arrow" onclick="goTop()"> &uarr; </div></div>
           
        </div>
    </footer>

      
      </div>  
        
    )
}

export default LandingPage
