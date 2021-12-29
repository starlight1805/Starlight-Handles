import React,{useState,useEffect, useRef } from 'react';
import axios from "axios";
import './Jokes.css'
import {FaStar} from 'react-icons/fa';
import { useSetState } from 'react-use';
import VanillaTilt from 'vanilla-tilt';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Wheel } from 'react-custom-roulette';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}

function Jokes(){
    const [rating,setRating]=useState(4);
    const [hover, setHover] = useState(null);
    const [open, setOpen] = useState(false);
    const [loader, setLoader] = useState(false);
    const [loadstate, setLoadState] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const data = [
    { option: 'Android App dev', style: { backgroundColor: '#F2E150', textColor: 'black' } },
    { option: 'React.js', style: { backgroundColor: '#112E46' } },
    { option: 'Flutter', style: { backgroundColor: '#6CB8DA', textColor: 'black' } },
    { option: 'Angular', style: { backgroundColor: '#112E46' } },
    { option: 'Node.js', style: { backgroundColor: '#F2E150', textColor: 'black' } },
    { option: 'MySQL', style: { backgroundColor: '#112E46' } },
    { option: 'MongoDB', style: { backgroundColor: '#6CB8DA', textColor: 'black' } },
  ]
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }
  const handleClose = () => {
    setOpen(false);
  };
    const optionss = {
        scale: 1.2,
        speed: 1000,
        max: 30
    };
    const [joketype, setjoketype] = useState('Programming');
    const [randomjoke, setrandomjoke] = useState("Hear about the new restaurant called KARMA? There is no menu: You get what you deserve");
    const options = {
        method: 'GET',
        url: `https://v2.jokeapi.dev/joke/${ joketype }`
    };
    async function getJoke(){
        setrandomjoke(' ')
        setLoadState(true);
        await axios.request(options).then(function (response) {
            console.log(response.data.joke+' ');
            var jokestring=response.data.joke+' ';
            if(jokestring.includes("undefined")){
              setLoadState(false)
              setrandomjoke(response.data.setup+' '+response.data.delivery)
            }else{
                setLoadState(false)
                setrandomjoke(response.data.joke+' ')
            }
            
            
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    return(
        <>
            
          <div class="jokescontainer">
          <div className='typedrop'>
                <p className='jokestypep'>Type: &nbsp;</p>
                <div className='dropdiv'>{/*<button className='dropbtn' onClick={dropdownclicked}><p className='typedropdown'>Any &nbsp;<i className='fas fa-caret-down'/> </p></button>*/}
                    <select name="cars" id="dropdown" autoFocus value={joketype} onChange={(event)=>{
                        setjoketype(event.target.value);
                    }} >
                        <option value='Any'>Any</option>
                        <option value='Programming'>Programming</option>
                        <option value='Miscellaneous'>Misc</option>
                        <option value='Dark'>Dark</option>
                        <option value='Pun'>Pun</option>
                        <option value='Spooky'>Spooky</option>
                        <option value='Christmas'>Christmas</option>
                    </select>
                </div>
            </div>
          <Tilt className="jokescard" options={optionss} >
          <div class="description">
                    <p className='jokesp'>Don't laugh challenge</p>
                    <h2 className='jokesh2'>{randomjoke}</h2>
                    {loadstate?<div><span className='loader' style={{marginLeft:'50%',marginTop:'10px',marginBottom:'10px'}}></span></div>:''}
                    <div><button onClick={getJoke} className='jokesbtn'>Get Another joke</button></div>  
                    {/*<button style={{borderRadius:'10px',width:'200px',backgroundColor:'#9270D5',fontFamily:'Sora'}}><a href='https://loginreact-19fe2.web.app/jokes'>Get a joke</a></button>*/}
            </div>
          </Tilt><br/><br/>
          <div style={{display:'flex'}}>
          <Tilt className="jokescard2" options={optionss} >
            <div class="description">
                        <p className='jokesp'>You enjoyed it?</p>
                        <div className='starsdiv'>
                        {[... Array(5)].map((star,i)=>{
                            const ratingValue=i+1;
                            return(
                                <label>
                                <input
                                    type='radio'
                                    name="rating"
                                    value={ratingValue}
                                    onClick={()=>setRating(ratingValue)}
                                    style={{display:'none'}}
                                    
                                />
                                <FaStar className='star' 
                                        color={ratingValue<=(hover||rating)?"#ffc107":"#e4e5e9"} 
                                        size={50} 
                                        onMouseEnter={()=>setHover(ratingValue)}
                                        onMouseLeave={()=>setHover(null)}/>
                            </label>
                            );
                            
                        })}
                    </div>
                        
                </div>
          </Tilt>
          <Tilt className="jokescard2" options={optionss} >
          <div class="description">
                    <p className='jokesp tile--emoji-cursor' style={{marginBottom:'0px'}}>Interested? Write your joke to us.</p>
                    <textarea placeholder="Project idea here" style={{marginLeft:"22%",height:'80px'}}></textarea>
                    <div><button onClick={handleClickOpen} className='jokesbtn' style={{marginLeft:'25%',cursor: 'url(../pages/Images/emoji.jpg),auto'}}>submit</button></div> 
                    <Dialog
                            className='desc-dialog2'
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            overlayStyle={{backgroundColor: 'transparent'}}
                            aria-describedby="alert-dialog-description"
                          
                        >
                            <DialogTitle id="alert-dialog-title" style={{fontFamily:'Sora',fontWeight:'bold'}}>
                            Submitted👍
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description" style={{fontFamily:'Sora'}}>
                                Thankyou for putting your efforts. We're still working to give you a better experience
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} className='dialog-button2' style={{fontFamily:'Sora',fontWeight:'bold'}}>
                                Close
                            </Button>
                            </DialogActions>
                        </Dialog> 
            </div>
          </Tilt></div>
          <div style={{marginLeft:'33%',marginTop:'5%',paddingBottom:'20px'}}>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
        
                onStopSpinning={() => {
                  setMustSpin(false)
                }}
                data={data}
                outerBorderColor='lightblue'
                radiusLineColor='white'
                innerRadius='10'
                innerBorderWidth='10'
                innerBorderColor='grey'
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}/>
                <button onClick={handleSpinClick} style={{width:'200px',marginLeft:'13%',borderRadius:'10px',backgroundColor:'#9270D5'}}>Spin</button>
          </div>
          </div>
          
          
        </>
    )
}

export default Jokes;