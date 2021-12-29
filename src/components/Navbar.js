import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import Support from "../pages/Support"
import Home from "../pages/Home"
import './Navbar.css';
import {IconContext} from "react-icons"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { render } from '@testing-library/react';
import {Tooltip } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { IoIosConstruct, IoMdCloseCircle } from 'react-icons/io';

const Navbar =({handleLogout}) =>{
    const [sidebar,setSidebar]=useState(false);
    const showSidebar=()=>setSidebar(!sidebar);
    const LightTooltip = withStyles(theme => ({
        tooltip: {
          backgroundColor: theme.palette.common.white,
          color: "green",
          boxShadow: theme.shadows[1],
          fontSize: 11
        }
      }))(Tooltip);
      
    return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link> 
            <NavLink to="/">
                <h2 className='welcome'>Starlight Handles</h2>
            </NavLink>
            {/*<h2 className='welcome'>Starlight Handles</h2>*/}
            <NavLink to="/about">
                <button className='contactbtn' >About Us</button>
            </NavLink>
            
            
            <button className='logoutbtn' onClick={handleLogout}><h7 className='logouttext'>Logout </h7><FaIcons.FaPowerOff/></button>

        </div>
        
        <nav className='nav-menuperm active'>
            
            <ul className='nav-menu-items'>
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars  onClick={showSidebar} style={{marginBottom:'50px',marginTop:'6px'}}/>
            </Link> 
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            {/*<LightTooltip arrow  title={item.title} placement="right" >
                            
                    </LightTooltip>*/}
                            <Link to={item.path} className='sidelink' /*onFocus={{backgroundColor:'#30305a'}}*/>
                                {item.icon}
                                <span className="sidespan">{item.title}</span>
                             </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        {/*<AiIcons.AiOutlineClose/>*/}
                        <IoMdCloseCircle/>
                     </Link> 
                </li>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            
                            <Link to={item.path}>
                                {item.icon}
                                <span  style={{fontFamily:'Sora',marginLeft:'10px',fontSize:'15px'}}>{item.title}</span>
                                <p>&nbsp;&nbsp;&nbsp;</p>
                             </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
    </>
    )
}



export default Navbar;