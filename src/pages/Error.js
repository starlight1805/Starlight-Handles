import { colors } from '@material-ui/core';
import { render } from '@testing-library/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import manimage from './Images/man.png'
import MsgFloatingbtn from '../components/MsgFloatingbtn';
const Error=()=>{
    render();{
        return(
            <>
            <MsgFloatingbtn/>
            <div className='errorpagediv'>
                <h1 className='errorpageoops'>Oops!</h1>
                <h2>404 - PAGE NOT FOUND</h2>
                <p>The page you are looking for might have been removed or had its name changed or its temporarily unavailable</p>
                <NavLink to={{
                    pathname:"/",
                }}><button className='errorpagebtn'>GO TO HOMEPAGE</button></NavLink>
            </div>
            {/*<div className="errorpage">
                
                
        </div>*/}</>
        );
    }
}
export default Error;