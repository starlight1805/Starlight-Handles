import React, { useRef ,useState} from 'react';
import myimage from './Images/myimage.JPG';
import Products from './Products';
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';
import video4 from './Videos/video4.mp4'
import Footer from './Footer'
import About from './About'
import Introduction from './Introduction';
import ScrolltoTop from '../components/ScrolltoTop';
import MsgFloatingbtn from '../components/MsgFloatingbtn';
import Glassmorphism from '../components/Glassmorphism';
import AdSense from 'react-adsense';
import Typewriter from "typewriter-effect";
import Timeline from '../timeline/Timeline'

function Home(){
    const introsection = useRef(null);
    const gotoIntroSection=()=>window.scrollTo({top:introsection.current.offsetTop,behavior:'smooth'});
    const productssection = useRef(null);
    const gotoProductsSection=()=>window.scrollTo({top:productssection.current.offsetTop,behavior:'smooth'});
    const [banner, setbanner] = useState(true);
    return(
        <>  
            {/*{banner?
                (<div className='homebanner'>
                    <div className='banner'>
                    <a href="whatsapp://send?text=Starlight Handles Website https://loginreact-19fe2.web.app/" data-action="share/whatsapp/share" className="bannershare"><i class="fas fa-share-alt"></i>&nbsp;&nbsp;&nbsp;share</a>
                    <p className='bannertext'>Hi! Thanks for visiting our website. We always hope to serve you with the best User Experience. Happy Browsing!</p>
                    <div className='bannerclose' onClick={()=>setbanner(false)} ><i class="fas fa-window-close"></i></div>
                    </div>
                </div>):""
            }*/}
            <div className='homecentral'>
            <MsgFloatingbtn/>
            <video className='videohome' src={video4} autoPlay loop muted/>
            
            <h1 className='adventure'>ADVENTURE AWAITS</h1>
            
            <p>What are you waiting for?</p>
                <a className='btn btn-outline-success' style={{fontFamily:"Sigmar One", marginTop:"30px"}} onClick={gotoIntroSection}>Get Started</a>
            </div>
            
            <div ref={introsection}>
                <Introduction/>
                <ScrolltoTop/>
                
            </div>
            
            <div>
                <Glassmorphism/>
            </div>
            <div ref={productssection}>
                <Products/>
            </div>
            <div className="timelinediv" style={{paddingTop:'0px'}}>
                <Timeline/>
            </div>
            <div className='homeabout'>
            <div className='home-abouttext'><h2 style={{fontFamily:'Sora',fontWeight:'900'}}>About Us</h2></div>
                <About/>
            </div> 
            
            <div>
                <Footer/>
            </div>
            
        </>    
    )
}

export default Home;