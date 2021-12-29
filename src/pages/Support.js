import React from 'react';
import Feedbackform from "./Feedbackform"

import video4 from './Videos/video7.mp4'
import man from './Images/man5.png'
function Support(){
    return(
        <>
            <div className='support'>
            {/*<video className='videosupport' src={video4} autoPlay loop muted/>
            <button className='manwords'>I'm here to collect your feedback buddy</button> {/* css in App.css
                <img src={man} className='man' style={{width:'250px',height:'300px',marginTop:'80px'}}></img>*/}
                
                <Feedbackform/>
                
            </div>
        </>
        
    )
}

export default Support;