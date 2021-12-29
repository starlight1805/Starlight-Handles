import React from 'react'
import styled from 'styled-components'
import '../assets/Footer.css'
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="row">
                    {/*column1*/}
                    <div className="footer-col">
                        <h4 style={{fontFamily:'Sora'}}>Company</h4>
                        <ul>
                            <li><NavLink to={{pathname:"/about",}}>about us</NavLink></li>
                            <li><NavLink to={{pathname:"/community",}}>Our Services</NavLink></li>
                            <li><NavLink to={{pathname:"/products",}}>Our Products</NavLink></li>
                            <li><NavLink to={{pathname:"#",}}>privacy policy</NavLink></li>
                        </ul>
                    </div>
                    {/*column2*/}
                    <div className="footer-col">
                        <h4 style={{fontFamily:'Sora'}}>Services</h4>
                        <ul>
                            <li><NavLink to={{pathname:"#",}}>Development</NavLink></li>
                            <li><NavLink to={{pathname:"#",}}>Design</NavLink></li>
                            <li><NavLink to={{pathname:"#",}}>Marketing</NavLink></li>
                            <li><NavLink to={{pathname:"#",}}>Consulting</NavLink></li>
                        </ul>
                    </div>
                    {/*column3*/}
                    <div className="footer-col">
                        <h4 style={{fontFamily:'Sora'}}>get Help</h4>
                        <ul>
                            <li><NavLink to={{pathname:"#",}}>FAQ</NavLink></li>
                            <li><NavLink to={{pathname:"/support",}}>contact us</NavLink></li>
                            <li><NavLink to={{pathname:"#",}}>order status</NavLink></li>
                            <li><NavLink to={{pathname:"#",}}>payment options</NavLink></li>
                        </ul>
                    </div>
                    
                    {/*column4*/}
                    <div className="footer-col">
                        <h4 style={{fontFamily:'Sora'}}>Follow us</h4>
                        <div className='social-links'>
                            <a href='#'><i className="fab fa-facebook-f"></i></a>
                            <a href='#'><i className="fab fa-instagram"></i></a>
                            <a href='#'><i className="fab fa-twitter"></i></a>
                            <a href='#'><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Starlight Handles - All Rights  Reserved
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Footer;