import React from 'react'
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';
import '../assets/CarouselCard.css'
import complogo from '../pages/Images/companylogo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselCard=()=>{
    return(
        /*<div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
                        <ol className='carousel-indicators'>
                            <li data-target='#carouselExampleIndicators' data-slide-to='0'></li>
                            <li data-target='#carouselExampleIndicators' data-slide-to='1' className='active'></li>
                        </ol>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                        <div className="overflow">
                                            <img src={complogo} alt='Image1' className="card-img-top"/>
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className="card-title" style={{fontFamily:'Sora'}}>Starlight Handles</h4>
                                            <p className="card-text text-secondary">Hello</p>
                                            <NavLink to={{pathname:"/account",}}>
                                                <a className='btn btn-outline-success'>Go Anywhere</a>
                                            </NavLink>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                        <div className="overflow">
                                            <img src={complogo} alt='Image1' className="card-img-top"/>
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className="card-title" style={{fontFamily:'Sora'}}>Starlight Handles</h4>
                                            <p className="card-text text-secondary">Hello2</p>
                                            <NavLink to={{pathname:"/account",}}>
                                                <a className='btn btn-outline-success'>Go Anywhere</a>
                                            </NavLink>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                        <div className="overflow">
                                            <img src={complogo} alt='Image1' className="card-img-top"/>
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className="card-title" style={{fontFamily:'Sora'}}>Starlight Handles</h4>
                                            <p className="card-text text-secondary">Hello3</p>
                                            <NavLink to={{pathname:"/account",}}>
                                                <a className='btn btn-outline-success'>Go Anywhere</a>
                                            </NavLink>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                        <div className="overflow">
                                            <img src={complogo} alt='Image1' className="card-img-top"/>
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className="card-title" style={{fontFamily:'Sora'}}>Starlight Handles</h4>
                                            <p className="card-text text-secondary">Hello4</p>
                                            <NavLink to={{pathname:"/account",}}>
                                                <a className='btn btn-outline-success'>Go Anywhere</a>
                                            </NavLink>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                        <div className="overflow">
                                            <img src={complogo} alt='Image1' className="card-img-top"/>
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className="card-title" style={{fontFamily:'Sora'}}>Starlight Handles</h4>
                                            <p className="card-text text-secondary">Hello5</p>
                                            <NavLink to={{pathname:"/account",}}>
                                                <a className='btn btn-outline-success'>Go Anywhere</a>
                                            </NavLink>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='single-box'>
                                        <div className="overflow">
                                            <img src={complogo} alt='Image1' className="card-img-top"/>
                                        </div>
                                        <div className='card-body text-dark'>
                                            <h4 className="card-title" style={{fontFamily:'Sora'}}>Starlight Handles</h4>
                                            <p className="card-text text-secondary">Hello6</p>
                                            <NavLink to={{pathname:"/account",}}>
                                                <a className='btn btn-outline-success'>Go Anywhere</a>
                                            </NavLink>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/
        <Carousel>
                <div>
                    <img src={complogo} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={complogo} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={complogo} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}
export default CarouselCard;