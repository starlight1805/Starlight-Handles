import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';
import '../assets/ScrolltoTop.css';
import Feedbackform from '../pages/Feedbackform';

function MsgFloatingbtn(){
    const [lapwidth, setlapwidth] = useState(true);
    const { height, width } = useWindowDimensions();
    
    const [floatOpen, setFloatOpen] = useState(false);
    const toggle=()=>{
        if(floatOpen)setFloatOpen(false);
        else setFloatOpen(true);
    }
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
            return {
                width,
                height
            };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
        useEffect(() => {
            function handleResize() {
            setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    return windowDimensions;
    }
    function checkwidth(){
        if(width<=768){
            return false;
        }
        else return true;
    }
    
    
    return(
    <>
    {checkwidth()?
    <div>
        {floatOpen?(
            <div className='supportfloating'>
                <Feedbackform/>
            </div>
        ):("")}
            <div className='msgfloating cursor-pointer text-center'>
                
                {/*<NavLink to={{pathname:"/messages",}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className='icon' width="22" height="22" viewBox="0 0 32 32"><path fill="#FFF" fill-rule="evenodd" d="M0 9h13.6c1.326 0 2.4-.895 2.4-2H0V4c0-2.21 1.79-4 4-4h24c2.21 0 4 1.79 4 4v17c0 2.21-1.79 4-4 4h-5v4.282c0 2.195-2.55 3.482-4.404 2.223L9 25H4c-2.21 0-4-1.79-4-4v-3h9.75c1.243 0 2.25-.895 2.25-2H0V9z"></path></svg>
        </NavLink>*/}
                <button className='msgfloating' onClick={toggle}>{floatOpen?(<i class="fas fa-times" style={{fontSize:'25px',marginTop:'-15px'}}></i>):(<svg xmlns="http://www.w3.org/2000/svg" className='icon' width="22" height="22" viewBox="0 0 32 32"><path fill="#FFF" fill-rule="evenodd" d="M0 9h13.6c1.326 0 2.4-.895 2.4-2H0V4c0-2.21 1.79-4 4-4h24c2.21 0 4 1.79 4 4v17c0 2.21-1.79 4-4 4h-5v4.282c0 2.195-2.55 3.482-4.404 2.223L9 25H4c-2.21 0-4-1.79-4-4v-3h9.75c1.243 0 2.25-.895 2.25-2H0V9z"></path></svg>)}</button>
                
            </div>
    </div>:<NavLink to={{pathname:"/messages",}}>
                    <button className='msgfloating'><svg xmlns="http://www.w3.org/2000/svg" className='icon' width="22" height="22" viewBox="0 0 32 32"><path fill="#FFF" fill-rule="evenodd" d="M0 9h13.6c1.326 0 2.4-.895 2.4-2H0V4c0-2.21 1.79-4 4-4h24c2.21 0 4 1.79 4 4v17c0 2.21-1.79 4-4 4h-5v4.282c0 2.195-2.55 3.482-4.404 2.223L9 25H4c-2.21 0-4-1.79-4-4v-3h9.75c1.243 0 2.25-.895 2.25-2H0V9z"></path></svg></button>
        </NavLink>} </>
    )
}

export default MsgFloatingbtn;

