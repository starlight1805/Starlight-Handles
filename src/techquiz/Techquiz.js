import React, { useEffect, useState } from "react";
import axios from "axios";
import './Techquiz.css'
import { ListItem, TextField } from "@material-ui/core";
import { Container } from "react-bootstrap";
import useSound from 'use-sound';
import buttonclick from '../pages/Audios/buttonclick.wav'
import wrongsound from '../pages/Audios/wronganswer.wav'
import MsgFloatingbtn from '../components/MsgFloatingbtn';

function Techquiz(){
    var jobarray=[];
    const [playbtn]=useSound(buttonclick);
    const [playwrong]=useSound(wrongsound);
    const [option1, setoption1] = useState(false)
    const [option2, setoption2] = useState(false)
    const [option3, setoption3] = useState(false)
    const [option4, setoption4] = useState(false)
    const [startquiz, setstartquiz] = useState(true)
  

    const [statearray, setStateArray] = useState(jobarray);
    const apiKey=`yzTEyIQlBiOPoSj3iO7IqLuM2U1j79IySX1Rf6hK`;
    const options = {
        method: 'GET',
        url: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1&tags=HTML`
    };
    const getQuiz=async ()=>{
        await axios.request(options).then(function (response) {
            {playbtn()}
            setoption1(false);
            setoption2(false);
            setoption3(false);
            setoption4(false);
            setstartquiz(false);
            jobarray=response.data;
            
            setStateArray(jobarray);
        }).catch(function (error) {
            console.error(error);
        });
        
    }

    const checkCorrect=()=>{
        {playwrong()}
        if(statearray[0].correct_answers.answer_a_correct){
            setoption1(true);
        }
        else if(statearray[0].correct_answers.answer_b_correct){
            setoption2(true);
        }
        else if(statearray[0].correct_answers.answer_c_correct){
            setoption3(true);
        }
        else if(statearray[0].correct_answers.answer_d_correct){
            setoption4(true);
        }
    }
    return(
        <>
        <MsgFloatingbtn/>
        <Container className='quizcontainer'>
            {startquiz?(
                <div className='starttestpage'>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <img src='https://i2.wp.com/maroonersrock.com/wp-content/uploads/2017/11/Its-Quiz-Time-Logo.png?fit=1024%2C1024&ssl=1' alt='logo' style={{width:'20%',marginLeft:'-5%'}}></img>
                        <h1 style={{fontFamily:'Cantarell',fontWeight:'900'}}>Technical QuizBee</h1>
                    </div>    
                    <p className='quizstartp' >Here we welcome you to take the technical quiz in order to gain some knowledge and test your skills in languages such as HTML,PHP,MySQL and many more</p>
                    <button onClick={getQuiz}className='blackbtn'>START QUIZ</button>
                    
                </div>
            ):(
                <div style={{textAlign:'center'}}><button className='blackbtn' disabled={true}>TECHNICAL QUIZ</button>
                
                {statearray.map((localState, index) => (<ListItem><div className="quizcard text-center" >
                <div className="overflow">
                    <div className='quizcard-body text-dark'>
                    <div classname='quiz-content'><h4 className="card-title" style={{fontFamily:'Cantarell',fontSize:'20px',fontWeight:'700'}}>{localState.question}</h4>
                        <p className="card-text text-secondary" style={{fontFamily:'Cantarell',fontSize:'20px'}}>Difficulty:&nbsp;{localState.difficulty}</p>
                        
                        <ListItem style={{display:'block'}}>
                            <button className="ansbtn" style={{backgroundColor:option1?'green':''}}>{localState.answers.answer_a}</button>
                            <button className="ansbtn" style={{backgroundColor:option2?'green':''}}>{localState.answers.answer_b}</button>
                            {localState.answers.answer_d!=null?<button className="ansbtn" style={{backgroundColor:option3?'green':''}}>{localState.answers.answer_c}</button>:<h5></h5>}
                            {localState.answers.answer_d!=null?<button className="ansbtn" style={{backgroundColor:option4?'green':''}}>{localState.answers.answer_d}</button>:<h5></h5>}

                        </ListItem>
                        <button onClick={checkCorrect}className='blackbtn' style={{width:'200px',marginTop:'20px'}}>SUBMIT</button>
                        
                        <button onClick={getQuiz} className='blackbtn2' style={{width:'200px',marginTop:'20px'}}>NEXT QUESTION&nbsp;&nbsp;<i class="fas fa-location-arrow"></i></button>
                        
                    </div>
                    
                    </div>
                    
                </div>
                </div>
                <button onClick={()=>setstartquiz(true)}className='endbtn' style={{fontWeight:'700',width:'300px'}}>END QUIZ</button>
        </ListItem>))}</div>)}
        </Container></>
    )

}

export default Techquiz;

