import React, {useState,useEffect} from 'react';
import './Descriptioncard.css';
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import {FaStar} from 'react-icons/fa';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import complogo from '../pages/Images/companylogo.png'
import vcollectlogo from "../pages/Images/vcollect.jpeg"
import bmilogo from "../pages/Images/bmilogo2.png"
import ittss from "../pages/Images/ocrlogo.png"
import screen1 from "../pages/Images/screen_1.png"
import screen2 from "../pages/Images/screen_2.png"
import screen3 from "../pages/Images/screen_3.png"
import screen4 from "../pages/Images/screen_4.png"
import screen5 from "../pages/Images/screen_5.png"
import screen6 from "../pages/Images/screen_6.png"
import Footer from '../pages/Footer'

const Descriptioncard=()=>{
    const [rating,setRating]=useState(4);
    const [hover, setHover] = useState(null);
    const [open, setOpen] = useState(false);
    var projecttitle="VCollect";
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    return(
        <>
            <div className='desc-page'>
            <div className='desc-card-container'>
                <div className='desc-card'>
                    <div className='desc-card-title'>
                        <h2 style={{fontSize:'25px',fontWeight:'bold'}}>{projecttitle}</h2>
                    </div>
                    <div className='desc-card-content'>
                        <h5>A User-friendly payment application which enables users to login to their account and scan QR code to make payments securely. This app functions fast and secure. This has been still under testing mode. You will be notified once we get into production</h5>
                    </div>
                    <div>
                        <button  className='desc-card-button' onClick={handleClickOpen}>Get Project</button>
                        <Dialog
                            className='desc-dialog'
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            overlayStyle={{backgroundColor: 'transparent'}}
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                            {projecttitle} project
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                In order to fork this project,reach us at vivekspaes222@gmail.com. We'll get in touch with you.
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} className='dialog-button'>
                                Close
                            </Button>
                            <Button onClick={handleClose} className='dialog-button' autoFocus>
                                Mail us
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    
                </div>
                <div className='desc-card-2'>
                    <div className='desc-card-title-2'>
                        <h2 style={{fontSize:'25px',fontWeight:'bold'}}>Concepts</h2>
                    </div>
                    <div className='starsdiv'>
                        {[... Array(5)].map((star,i)=>{
                            const ratingValue=i+1;
                            return(
                                <label>
                                <input
                                    type='radio'
                                    name="rating"
                                    value={ratingValue}
                                    onClick={()=>setRating(ratingValue)}
                                    style={{display:'none'}}
                                    
                                />
                                <FaStar className='star' 
                                        color={ratingValue<=(hover||rating)?"#ffc107":"#e4e5e9"} 
                                        size={50} 
                                        onMouseEnter={()=>setHover(ratingValue)}
                                        onMouseLeave={()=>setHover(null)}/>
                            </label>
                            );
                            
                        })}
                    </div>
                    <div className='desc-card-content'>
                        <h5>
                            <FaIcons.FaArrowAltCircleRight/> ZXing Scanner for QR Scanner functions<br/>
                            <FaIcons.FaArrowAltCircleRight/> Retofit for HTTP request<br/>
                            <FaIcons.FaArrowAltCircleRight/> MySQL as Database<br/>
                            <FaIcons.FaArrowAltCircleRight/> CRUD Operations<br/>
                            <FaIcons.FaArrowAltCircleRight/> PHP Scripting Language<br/>
                            
                        </h5>
                        
                    </div>
                    
                </div>
            </div>
            </div>
            <div className='desc-card-container' >
                <div className='desc-card-3'>
                <div className='desc-card-title-3'>
                        <h2 style={{fontSize:'25px',fontWeight:'bold'}}>Images</h2>
                </div>
                <div className='desc-card-content'>
                    
                    <Carousel autoPlay interval={7000} showThumbs={true} showStatus={false} infiniteLoop  useKeyboardArrows transitionTime={2000} width="600px">
                        <div className="slide-holder">
                        <img
                            alt=""
                            src={screen1}
                            
                        />
                        
                        <div className="text-container">
                            <h2>Login</h2>
                            
                        </div>
                        </div>
                        <div className="slide-holder">
                        <img
                            alt=""
                            src={screen2}
                        />
                        <img
                            alt=""
                            src={screen3}
                            style={{marginLeft:'0px'}}
                        />
                        <div className="text-container">
                            <h2>Signup</h2>
                            
                        </div>
                        </div>
                        <div className="slide-holder">
                        <img
                            alt=""
                            src={screen4}
                        />
                        <img
                            alt=""
                            src={screen5}
                            style={{marginLeft:'0px'}}
                        />
                        <div className="text-container">
                            <h2>Dashboard</h2>
                            
                        </div>
                        </div>
                        <div className="slide-holder">
                        <img
                            alt=""
                            src={screen6}
                            
                        />
                        
                        <div className="text-container">
                            <h2>Payment Status</h2>
                            
                        </div>
                        </div>
                    </Carousel>
                    </div></div></div>
                    <Footer/>
        </>
    )
}

export default Descriptioncard;