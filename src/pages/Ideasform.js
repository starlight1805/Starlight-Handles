import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import '../assets/Ideaform.css'
import {db} from '../firebase'
import { NavLink } from 'react-router-dom';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Container, ListItem} from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
import randomColor from 'randomcolor';
import Community from './Community';

const Ideasform=()=>{
  var objarr=[];
  var backcolors=['#27A8DE','#51E8DD','#E2E50F','#7BE851','#D85FE9','#E982DC'];
  const [list, setList] = useState(objarr);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [part1, setpart1] = useState(true);
  const [objective, setobjective] = useState("")
  const [bgcolor, setbgcolor] = useState("#82E9B5")
  const getRandomColor=()=>{
    var randcolor = backcolors[Math.floor(Math.random()*backcolors.length)];
    setbgcolor(randcolor);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("ideas")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
        setpart1(false);
        
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    
    setName("");
    setEmail("");
    setMessage("");
  };
  const addObject=(e)=>{
    e.preventDefault();
    getRandomColor();
    setList(list.concat({objective, id: uuidv4() ,color:bgcolor}));
    setobjective("");
  }
  const removeobject=(id)=>{
    const newList = list.filter((item) => item.id !== id);
 
    setList(newList);
  }
    render();{
        return(
        <>
        {part1?
        <div className='form-content-right'>
            
        <form className='form2'  onSubmit={handleSubmit}>
        <h1 className='heading'>RACK BRAINS</h1>
          <p style={{width:'100%',backgroundColor:'lightyellow',padding:'20px',fontFamily:'Cantarell',borderRadius:'5px'}}>Get started with us today! Share your ideas for us to work on.We'll definitely reach out to you.</p>
          {/*<h2 style={{fontFamily:'Cantarell'}}>
            Get started with us today! Share your ideas for any website or an app that you want us to work on.We'll definitely reach out to you.
        </h2>*/}
          <div className='form-inputs'>
            {/*<label className='form-label'>Name</label>*/}
            <input
              className='form-input'
              type='text'
              name='Name'
              placeholder='Name'
              value={name}
                onChange={(e) => setName(e.target.value)}
            />
            
          </div>
          <div className='form-inputs'>
            {/*<label className='form-label'>Email</label>*/}
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
          
            <textarea style={{width:'330px',fontFamily:'Cantarell'}}
                placeholder="Project idea here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}>
            </textarea>
         
          <button className='form-input-btn' type='submit'>
            Submit
          </button>
          
          <br/>
          <p style={{color:'black',fontSize:'15px',fontFamily:'Cantarell'}}>Meanwhile, go through our <NavLink style={{color:'yellowgreen',fontSize:'15px',textDecoration:'none',fontFamily:'Cantarell'}} to='/products' >projects</NavLink> here</p>
          <br/>
        </form>
        
      </div>:

      <Container style={{backgroundColor:'white',marginBottom:'30px',paddingTop:'20px'}}>
        <h1 className='heading'>OBJECTIVES</h1>
        <p style={{width:'100%',backgroundColor:'lightyellow',padding:'20px',fontFamily:'Cantarell',borderRadius:'5px'}}>Push your objectives and features of the app through points one by one</p>
        {list.map((item) => (
              <ListItem key={item.id}>
                
                <div  style={{backgroundColor:`${item.color}`,padding:'5px',fontFamily:'Cantarell',borderRadius:'5px',display:'flex'}}>
                  <p style={{marginTop:'5px',marginBottom:'3px',float:'left'}}>&nbsp;&nbsp;{item.objective}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  <div onClick={()=>removeobject(item.id)}><i class="fas fa-window-close"></i></div>
                </div>
                
              </ListItem>
            ))}
        <form onSubmit={addObject}>
          <div style={{display:'flex',marginBottom:'30px'}}>
            <input
                className='form-input'
                style={{width:'150%'}}
                type='text'
                name='Name'
                placeholder='Objective or feature'
                value={objective}
                onChange={(e) => setobjective(e.target.value)}
            />
            
            <button className='form-input-btn' style={{marginTop:'0px'}} type='submit'>
              Push
            </button>
          
          </div>
        </form>
      </Container>
      }
      
      </>
        )
    }
    
}
export default Ideasform;
