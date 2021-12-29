import React, { useRef } from 'react';
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';
import '../assets/Introduction.css'
import introvideo from './Images/chatting4.gif'
import Typewriter from "typewriter-effect";

function Introduction(){
    
    return(
        <div className='site-banner' style={{backgroundColor:'white'}}>
            <div className='scontainer'>
                <div className='row'>
                    <div className='col-sm-6 col-md-6 site-title'>
                        
                        <h1 className='myname'>Hi, I'm Vivek</h1>
    
                        <h7 className='intro-skills'><span style={{marginLeft:'0px'}}>&#123;</span><span className="typewriter nocaret" style={{fontSize:'17px',fontFamily:'Sora'}}></span> developer<span>&#125;</span></h7>
                        <p className='intro-skills'>An enthusiastic student who loves to explore</p>
                        <div className='site-buttons'>
                            <div className='d-flex flex-row flex-wrap'>
                                <NavLink to={{pathname:"/about",}}>
                                    {/*<a className='btn btn-outline-success' style={{marginBottom:'20px'}}>Know more about me</a>
                                    <button>Hello</button>*/}
                                    <button  className='intro-button' >Know more about me</button>
                                </NavLink>
                                
                            </div>
                            <div>
                            <NavLink to={{pathname:"/getintouch",}}>
                            <button class="custom-btn btn-12"><span style={{fontFamily:'Klee One'}}>with me</span><span style={{fontFamily:'Klee One'}}>Get in touch</span></button>
                                </NavLink>
                            
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-sm-6 col-md-6 banner-image'>
                        <img src={introvideo} alt="loading..." className='intropic'/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Introduction;