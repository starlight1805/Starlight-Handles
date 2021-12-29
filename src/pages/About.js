import React, {useState,useEffect} from "react";
import myimage from './Images/myimage.jpeg';
import myimage2 from './Images/cartoon1.jpeg';
import '../assets/About.css';
import MsgFloatingbtn from '../components/MsgFloatingbtn';
import Cursor from "react-custom-pointer";

function About(){
    const [toggleState,setToggleState]= useState(1);
    const toggleTab=(index)=>{
        setToggleState(index);
    }
    return(
        <>
            <MsgFloatingbtn/>
            <div className='profile-container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='profile-img'>
                        <img src={myimage2} alt='vivek' style={{height:'140px',width:'150px',borderRadius:'50%',backgroundPosition:'center'}}/>
                        </div>
                        
                    </div>
                    <div className='col-md-7'>
                        <div className='profile'>
                            <h5 className='profilename'>Vivek Vardhan Varkala</h5>
                            <h6 className='skillstext'>FLUTTER & WEB DEVELOPER</h6>
                            <p className='profile-rating mt-3 mb-5'><br/></p>
                            
                           <ul class="nav nav-pills nav-fill" id="myTab" role="tablist">
                                
                                <li className="nav-item" role="presentation">
                                    <a className={toggleState===1?"nav-link active":"nav-link"} onClick={()=>toggleTab(1)} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={toggleState===2?"nav-link active":"nav-link"}  onClick={()=>toggleTab(2)} id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">skills</a>
                                </li>
                                </ul>
                                
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='profile-work' style={{fontSize:'13px',color:'white',padding:'10px'}}>
                            <p>WORK LINKS</p>
                            <a href='https://www.linkedin.com/in/vivek-varkala-b7136b189/' target='_vivek' className='profilelinks'>LinkedIn</a><br/><br/>
                            <a href='https://github.com/starlight1805' target='_vivek' className='profilelinks'>Github</a><br/><br/>
                            <a href='https://web.whatsapp.com/' target='_vivek' className='profilelinks'>Whatsapp</a><br/><br/>
                            <a href='https://www.instagram.com/' target='_vivek' className='profilelinks'>Instagram</a><br/><br/>
                            
                            
                        </div>
                    </div>
                    <div className='col-md-8 pl-5 about-info' style={{color:'white'}}>
                    <div class="tab-content" id="myTabContent" style={{padding:'31px'}}>
                        <div className={toggleState===1?"tab-pane fade show active":"tab-pane fade"} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>Name</label>
                                </div>
                                <div className='col md-6'>
                                    <p>Vivek Varkala</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>Email id</label>
                                </div>
                                <div className='col md-6'>
                                    <p>vivekspaes111@gmail.com</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>Contact No</label>
                                </div>
                                <div className='col md-6'>
                                    <p>7396666774</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>Profession</label>
                                </div>
                                <div className='col md-6'>
                                    <p>Student</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>University</label>
                                </div>
                                <div className='col md-6'>
                                    <p>Nit Trichy</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>Internship</label>
                                </div>
                                <div className='col md-6'>
                                    <p>ilogitron Technologies</p>
                                </div>
                            </div>
                        </div>
                        <div className={toggleState===2?"tab-pane fade show active":"tab-pane fade"} id="skills" role="tabpanel" aria-labelledby="skills-tab">
                        <div className='row'>
                                <div className='col md-6'>
                                    <label>Web Technologies</label>
                                </div>
                                <div className='col md-6'>
                                    <p style={{color:'chartreuse'}}><br/>HTML,CSS,Bootstrap,React.js</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>App-Development</label>
                                </div>
                                <div className='col md-6'>
                                    <p style={{color:'chartreuse'}}><br/>Native,Hybrid(Android Studio) and cross(Flutter) platform application</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>Frameworks</label>
                                </div>
                                <div className='col md-6'>
                                    <p style={{color:'chartreuse'}}>Android Studio</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>Database</label>
                                </div>
                                <div className='col md-6'>
                                    <p style={{color:'chartreuse'}}>MySQL,Firebase</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col md-6'>
                                    <label>Scripting Languages</label>
                                </div>
                                <div className='col md-6'>
                                    <p style={{color:'chartreuse'}}>PHP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                
            </div>
            
        </>
    );
    
}

export default About;