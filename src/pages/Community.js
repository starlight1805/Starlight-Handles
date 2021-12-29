import React,{useState} from 'react';
import Ideasform from './Ideasform'
import '../assets/Ideaform.css'
import MsgFloatingbtn from '../components/MsgFloatingbtn';
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';


function Community(){
    const [step, setstep] = useState(0);
    
    return(
        <div className='communitypage' style={{height:"150vh",marginTop:'-5px',paddingTop:'30px'}}>
            <MsgFloatingbtn/>
            {/*<div><StepProgressBar
                startingStep={stepnumber}
                secondaryBtnClass='prevbtn'
                primaryBtnClass='nextbtn'
                steps={[
                    {
                    label: 'Submit your idea',
                    subtitle: '10%',
                    name: 'step 1',
                    },
                    {
                    label: 'Push your objectives',
                    subtitle: '100%',
                    name: 'step 2',
                    
                    },
                ]}
            />
            </div>*/}
            <div className='form-container'>
                <Ideasform />
            </div>
        </div>
    )
}

export default Community;

