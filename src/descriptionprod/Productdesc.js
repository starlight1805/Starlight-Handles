import { colors } from '@material-ui/core';
import React from 'react';

import screen1 from '../pages/Images/screen_1.png';
import screen2 from '../pages/Images/screen_2.png';
import screen3 from '../pages/Images/screen_3.png';
import screen4 from '../pages/Images/screen_4.png';
import Descriptioncard from './Descriptioncard'

const Productdesc=()=>{
    return(
        <>
            {/*<div className='vCollectdesc'>
                <img src={screen1}width="100%" height="100%"/>
                <img src={screen2}width="100%" height="100%"/>
                <img src={screen3}width="100%" height="100%"/>
                <img src={screen4}width="100%" height="100%"/>
    </div>*/}
            <div>
                <Descriptioncard></Descriptioncard>
            </div>
            
        </>

        
    )
}

export default Productdesc;