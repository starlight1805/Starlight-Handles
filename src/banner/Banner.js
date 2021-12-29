import React from 'react';
import './Banner.css';

function Banner(){
    return(
        <div className='banner'>
            <a href="whatsapp://send?text=Starlight Handles Website https://loginreact-19fe2.web.app/" data-action="share/whatsapp/share" className="bannershare"><i class="fas fa-share-alt"></i>share</a>
            <p>Hi! Thanks for visiting our website. We always hope to serve you with the best User Experience. Happy Browsing! 100 people have visited our website</p>
            <div className='bannerclose'><i class="fas fa-window-close"></i></div>
        </div>
    )
}
export default Banner;