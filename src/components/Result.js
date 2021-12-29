import React from "react";
import video4 from '../pages/Videos/video7.mp4'

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <video className='videohome' src={video4} autoPlay loop muted/>
    <div className="score">You scored {score} / 5 correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
