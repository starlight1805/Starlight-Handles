import React from 'react';
import Card from "./CardsUI";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import MsgFloatingbtn from '../components/MsgFloatingbtn';
import vcollectlogo from "./Images/vcollect.jpeg"
import bmilogo from "./Images/bmilogo2.png"
import ittss from "./Images/ocrlogo.png"

import complogo from './Images/companylogo.png'


function Products(){
    return(<div>
        <div className='home-services2'><h2 style={{fontFamily:'Sora',fontWeight:'900'}}>Our Products</h2></div>
        <MsgFloatingbtn/>
        <div className='home-services' style={{paddingLeft:'50px'}}>
            
            <div className='container-fluid d-flex justify-content-center'>
            {/*<video className='videoquiz' src={video4} autoPlay loop muted/>*/}
            <div className='row'>
                <div className='col-md-4'>
                    <Card imgsrc={complogo} title="Starlight Handles" desc="Portfolio & Service" buttontitle="Go Anywhere" pathname='account'/>
                </div>
                <div className='col-md-4'>
                    <Card imgsrc={vcollectlogo} title="VCollect" desc="User friendly Payment Application" buttontitle="Go Anywhere" pathname='account'/>
                </div>
            
                <div className='col-md-4'>
                    <Card imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzromLfl4gOfVmo1DhnziTyS8DOYgaW3Kjag&usqp=CAU' title="Pokedex" desc="Displays Pokemons by a set of categories" buttontitle="Go to Github" pathname='https://github.com/starlight1805/Pokedex'/>
                </div>
                <div className='col-md-4'>
                    <Card imgsrc={ittss} title="Image to Text Converter" desc="Convert any text to printed version" buttontitle="Go Anywhere" pathname='account'/>
                </div>
                <div className='col-md-4'>
                    <Card imgsrc='https://is5-ssl.mzstatic.com/image/thumb/Purple4/v4/5f/a0/b2/5fa0b237-4cac-a339-4b71-d9b221e18f64/source/512x512bb.jpg' title="Dots and Boxes" desc="A multiplayer game with a set of difficulty levels" buttontitle="Go to Github" pathname='https://github.com/starlight1805/dotsandboxes' />
                </div>
                <div className='col-md-4'>
                    <Card imgsrc={bmilogo} title="BMI Tracker" desc="Calculates BMI to keep regular check on body" buttontitle="Go Anywhere" pathname='account'/>
                </div>
            </div>
        </div>
        
        
        </div>
        <div>
        <p className='joketextproducts'>Fed up with the project stuff, then &nbsp;<NavLink style={{color:'yellowgreen',textDecoration:'none'}} to='/jokes' >follow me   </NavLink>&nbsp; to a joke</p></div></div>
        
        
    )
}

export default Products;