import React, {useState,useEffect} from 'react';
import '../assets/Faq.css';
import aticon from '../assets/images/illustration-box-desktop.svg';
import arrowicon from '../assets/images/icon-arrow-down.svg';

function Faq(){
    const [fontw, setfontw] = useState(100);
    const [ans1, setans1] = useState(false);
    const [ans2, setans2] = useState(false);
    const [ans3, setans3] = useState(false);
    const [ans4, setans4] = useState(false);
    const [ans5, setans5] = useState(false);
    function toggle(a){
        switch (a) {
            case 1:
                setans1(!ans1);
                setans2(false);
                setans3(false);
                setans4(false);
                setans5(false);
                break;
            case 2:
                setans2(!ans2);
                setans1(false);
                setans3(false);
                setans4(false);
                setans5(false);
                break;
            case 3:
                setans3(!ans3);
                setans2(false);
                setans1(false);
                setans4(false);
                setans5(false);
                break;
            case 4:
                setans4(!ans4);
                setans2(false);
                setans3(false);
                setans1(false);
                setans5(false);
                break;
            case 5:
                setans5(!ans5);
                setans2(false);
                setans3(false);
                setans4(false);
                setans1(false);
                break;
        
            default:
                break;
        }
    }
    return(
        <div className="acwrapper" style={{marginLeft:'22%'}}>
            <div class="image__wrapper">
                <div class="image__wrapper_inner">

                </div>
                
                {/*<div className="acbox"><svg width="191" height="184" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><filter x="-97.9%" y="-76.3%" width="295.8%" height="313.7%" filterUnits="objectBoundingBox" id="a"><feOffset dy="25" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="25" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.209139076 0 0 0 0 0.0691446444 0 0 0 0 0.478091033 0 0 0 0.497159091 0" in="shadowBlurOuter1"/></filter><path id="b" d="M0 27.756v53.87l41.968 24.035 47.387-28.025v-53.87"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(50.93 2.125)"><use fill="#000" filter="url(#a)" xlinkHref="#b"/><use fill="#FF9271" xlinkHref="#b"/></g><path fill="#DF5C34" fill-rule="nonzero" d="M92.899 53.917v53.87l47.387-28.026v-53.87z"/><path fill="#F47B56" fill-rule="nonzero" d="M50.93 29.88L99.624 2.126l40.662 23.767-47.387 28.025z"/><path d="M94.013 14.49a25.942 25.942 0 0114.207 3.129c2.486 1.462 3.844 2.988 4.036 4.579.192 1.59-.628 2.975-2.562 4.143a9.115 9.115 0 01-2.985 1.18c-.869.205-1.76.295-2.652.269l-.974-.077c.091.217.151.446.18.68a3.132 3.132 0 01-.513 1.552 5.704 5.704 0 01-2.1 2.065 12.633 12.633 0 01-6.7 1.77 13.247 13.247 0 01-6.957-1.757c-1.999-1.18-3.023-2.566-3.1-4.156a4.49 4.49 0 012.562-4.015 8.488 8.488 0 012.357-1.013 9.175 9.175 0 012.037-.346h.705l-1.282-.77 3.6-2.244 8.34 4.912a4.377 4.377 0 004.15 0c1.769-1.103 1.137-2.552-1.895-4.348a19.261 19.261 0 00-10.556-2.347 21.67 21.67 0 00-11.018 3.168c-3.023 1.89-4.522 4.143-4.496 6.76 0 2.564 1.601 4.848 4.714 6.682a21.015 21.015 0 0011.146 2.655 20.926 20.926 0 0011.017-2.925 12.353 12.353 0 003.062-2.565 5.683 5.683 0 001.28-2.18l.18-.808 4.753.269c.008.145.008.29 0 .436a8.216 8.216 0 01-.346 1.154 8.303 8.303 0 01-.82 1.72 11.912 11.912 0 01-1.69 2 15.952 15.952 0 01-2.755 2.13 25.602 25.602 0 01-9.326 3.36 35.176 35.176 0 01-10.877.192 24.896 24.896 0 01-9.339-3.053 12.127 12.127 0 01-5.304-5.566 8.192 8.192 0 010-6.593 12.692 12.692 0 015.266-5.759 28.966 28.966 0 0114.655-4.284zm4.663 13.262c-.17-.891-.77-1.64-1.601-2.001a6.579 6.579 0 00-3.33-.911 5.619 5.619 0 00-3.101.795 2.283 2.283 0 00-1.281 2.001c.117.89.69 1.654 1.512 2.014a6.54 6.54 0 003.394.86 6.092 6.092 0 003.254-.847 2.065 2.065 0 001.205-1.911" fill="#3E2928" fill-rule="nonzero"/></g></svg></div>
            */}
            </div>
            <div class="accordion__wrapper">
        <h1 class="title__accordion">FAQ</h1>
        <div class="questions__accordions">
            <div class="question-answer__accordion">
                <div class="question" onClick={()=>toggle(1)}>
                    <h3 class="title__question" style={ans1?{fontWeight:"700"}:{fontWeight:'100'}}>
                        How is Starlight Handles started?
                    </h3>
                    <img src={arrowicon}></img>
                </div>
                {ans1?<div class="answer">
                    {/*Constant grit and determination has been the key*/}
                    This is started as inspiration to have a portfolio website
                </div>:""}
            </div>


            <div class="question-answer__accordion">
                <div class="question" onClick={()=>toggle(3)}>
                    <h3 class="title__question" style={ans3?{fontWeight:"700"}:{fontWeight:'100'}}>
                        How do I reset my password?
                    </h3>
                    <img src={arrowicon}></img>    
                </div>
                {ans3?<div class="answer ">
                    Click “Forgot password” from the login page or “Change password” from your profile page.
            A reset link will be emailed to you.
                </div>:""}
            </div>

            <div class="question-answer__accordion">
                <div class="question" onClick={()=>toggle(4)}>
                    <h3 class="title__question" style={ans4?{fontWeight:"700"}:{fontWeight:'100'}}>
                        How can I reach you to get services?
                    </h3>
                    <img src={arrowicon}></img>
                </div>
                {ans4?<div class="answer ">
                    Fill up all the required details at services tab. we will contact you as soon as we review your application.
                </div>:""}
            </div>
            <div class="question-answer__accordion">
                <div class="question" onClick={()=>toggle(2)}>
                    <h3 class="title__question" style={ans2?{fontWeight:"700"}:{fontWeight:'100'}}>
                        How are payments processed?
                    </h3>
                    <img src={arrowicon}></img>
                </div>
                {ans2?<div class="answer ">
                    You will receive payment instructions through email as soon as we accept the proposal.
                </div>:""}
            </div>
            <div class="question-answer__accordion">
                <div class="question" onClick={()=>toggle(5)}>
                    <h3 class="title__question" style={ans5?{fontWeight:"700"}:{fontWeight:'100'}}>
                        Do you provide additional support?
                    </h3>
                    <img src={arrowicon}></img>
                </div>
                {ans5?<div class="answer ">
                    Chat and email support is available 24/7. Phone lines are open during normal business hours.
                </div>:""}
            </div>

        </div>
    </div>
        </div>
    )
}

export default Faq;