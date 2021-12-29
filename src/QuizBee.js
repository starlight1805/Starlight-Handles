import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import video4 from './pages/Videos/video7.mp4';

class QuizBee extends Component{
    
    state={
        questionBank:[],
        score:0,
        responses:0,
        check:0
    };
    getQuestions=()=>{
        quizService().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    };
    computeAnswer=(answer,correctAnswer)=>{
        if(answer==correctAnswer){
            this.setState({
                score: this.state.score+1
            });
        }
        this.setState({
            responses:this.state.responses<5?this.state.responses+1:5
        });
    }
    playAgain=()=>{
        this.getQuestions();
        this.setState({
            score:0,
            responses:0
        });
    }
    checkstate=()=>{
        this.setState({
            check:1
        });
    }
   /*
    componentDidMount(){
        this.getQuestions();
    }*/
    render(){
        return(
            <div className="maincontainer">
                
            <div className="container" style={{height:'50px'}}>
            
                <div className="title">QuizBee</div>
                
                {this.state.check==0 ? (<button
                className="quizbtn"
                onClick={this.checkstate}
                >Take a Quiz </button>):null}
                
                {this.state.check==1 && this.state.questionBank.length>0 &&this.state.responses<5&& this.state.questionBank.map(
                    ({question,answers,correct,questionId})=>(
                    <QuestionBox 
                        question={question} 
                        options={answers} 
                        key={questionId}
                        selected={answer=>this.computeAnswer(answer,correct)}
                    />
                 )
                )}
            {this.state.responses===5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>):null}
                
                
            </div>

            </div>
        );
    }
}
ReactDOM.render(<QuizBee/>, document.getElementById("root"));
export default QuizBee;