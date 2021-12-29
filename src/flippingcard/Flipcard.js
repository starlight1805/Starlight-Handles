import React, { useState, useEffect } from 'react';
import './Flipcard.css';
import myimage2 from '../pages/Images/cartoon1.jpeg';
const Flipcard=()=>{
    return(
        <div className='card-container'>
        <div className='card-body'>
          <CardBack />

          <CardFront />
        </div>
      </div>
        
    );
}
class CardInput extends React.Component {
    render() {
      return(
        <fieldset>
          <input className='flip-input' name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
        </fieldset>
      )
    }
  }
  
  // React component for textarea
  class CardTextarea extends React.Component {
    render() {
      return(
        <fieldset>
          <textarea className='flip-textarea' name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required ></textarea>
        </fieldset>
      )
    }
  }
  
  // React component for form button
  class CardBtn extends React.Component {
    render() {
      return(
        <fieldset>
          <button className='flip-btn' type={this.props.type} value={this.props.value}>{this.props.value}</button>
        </fieldset>
      )
    }
  }
  
  // React component for social profile links
  class CardProfileLinks extends React.Component {
    render() {
      const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];
      
      const linksList = profileLinks.map((link, index) =>
        <li key={index} className='flip-li'><a href='#' className='flip-a'><i className={'fa fa-' + link}></i></a></li>
      );
                                       
      return(
        <div>
                        <ul class="list" className='glassul'>
                        <li className='glassli'><a href="https://twitter.com/varkala_vivek" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter" style={{color:'#000',fontSize:'1.9rem',transition:'all 0.3s ease'}}></i></a></li>
                        <li className='glassli'><a href="https://github.com/starlight1805" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" style={{color:'#000',fontSize:'1.9rem',transition:'all 0.3s ease'}}></i></a></li>
                        <li className='glassli'><a href="https://www.linkedin.com/in/vivek-varkala-b7136b189/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in" style={{color:'#000',fontSize:'1.9rem',transition:'all 0.3s ease'}}></i></a></li>
                    </ul>
        </div>
      )
    }
  }
  
const CardFront=()=>{
    return(
        
        <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              {/*<img src='https://source.unsplash.com/w8YICpz1I10/358x458' className='flipimg' />*/}
              <div className='profile-img'>
                        <img src={myimage2} alt='vivek' style={{height:'160px',width:'170px',borderRadius:'50%',backgroundPosition:'center'}}/>
                        </div>
            </div>

            <div className='col-md-7 side-front-content'>
              <h2 className='flip-h2'>Student</h2>

              <h1 className='flip-h1'>Developer</h1>

              <p className='flip-p'>Andrey is driven by turning ideas into scalable and and empowering experiences that solve real life problems.</p>

              <p className='flip-p'>He is currently the founder of Dvorak Media. Previously, Andrey was a product designer at Dropbox.</p>

              
            </div>
          </div>
        </div>
      </div>
    );
}
const CardBack=()=>{
      return(
        <div className='card-side side-back'>
          <div className='container-fluid'>
            <h1 className='flip-h1' style={{marginBottom:'50px'}}>Let's get in touch!</h1>
            
            <form formAction='' className='card-form'>
              <div className='flip-row'>
                <div className='col-md-6'>
                  <CardInput name='contactFirstName' id='contactFirstName' type='text' placeholder='Your first name' />
                </div>
  
                <div className='col-md-6'>
                  <CardInput name='contactLastName' id='contactLastName' type='text' placeholder='Your last name' />
                </div>
              </div>

              <div className='flip-row' style={{marginBottom:'0px'}}>
                <div className='col-md-6'>
                  <CardInput name='contactEmail' id='contactEmail' type='email' placeholder='Your email address' />
                </div>
  
                <div className='col-md-6'>
                  <CardInput name='contactSubject' id='contactSubject' type='text' placeholder='Subject' />
                </div>
              </div>
              
              <CardTextarea name='contactMessage' id='contactMessage' placeholder='Your message' />
              
              <CardBtn className='btn btn-primary' type='submit' value='Send message' />
            </form>
            
            <CardProfileLinks />
          </div>
        </div>
      )
    
  }
  
export default Flipcard;