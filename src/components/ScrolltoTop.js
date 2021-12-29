import React, {useState,useEffect} from 'react';
import '../assets/ScrolltoTop.css';
import { useWindowScroll } from "react-use";

function ScrolltoTop(){
    const {y:pageYoffset}=useWindowScroll();
    const [visibile,setVisibility]=useState(false);
    useEffect(() => {
        if(pageYoffset>800){
            setVisibility(true);
        }else{
            setVisibility(false);
        }
    }, [pageYoffset]);

    const scrolltoTop=()=>window.scrollTo({top:0,behavior:'smooth'});

    if(!visibile){
        return false;
    }
    return(
        <div className='scroll-to-top cursor-pointer text-center' onClick={scrolltoTop}>
            <i className='icon fas fa-chevron-up'></i>
        </div>
    )
}

export default ScrolltoTop;