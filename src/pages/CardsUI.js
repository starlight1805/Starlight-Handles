import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';
import './card-style.css'

const Card =props=>{
    const [linkbtn, setlinkbtn] = useState(false)
    const handlelinkbtn=()=>{
        
        if(props.pathname!='account'){
            setlinkbtn(true);
        }
    };
    
    return(
        <div className="card text-center" style={{borderRadius:'15px'}}  onMouseEnter={handlelinkbtn} >
            <div className="overflows">
                <img src={props.imgsrc} alt='Image1' className="card-img-top" style={{width:'150px',height:'150px',borderRadius:'15px'}} />
                <div className='card-body text-dark'>
                <h4 className="card-title" style={{fontFamily:'Sora',fontSize:'1.2rem'}}>{props.title}</h4>
                <p className="card-text text-secondary">{props.desc}</p>
                
                {linkbtn?<a className='btn btn-outline-success' href={props.pathname} style={{fontFamily:'Sora'}}  target="_blank" rel="noopener noreferrer">{props.buttontitle}</a>:
                <NavLink to={{
                    pathname:'/'+props.pathname,
                }}>
                    <a className='btn btn-outline-success' onClick={handlelinkbtn} style={{fontFamily:'Sora'}}>{props.buttontitle}</a>
                </NavLink>}
                
            </div>
            </div>
            
        </div>
    )
}

export default Card;