import React,{Component} from 'react';
import {firebase} from "../firebase";
import Products from "./Products";
import QuizBee from '../QuizBee';
import video4 from './Videos/video7.mp4'

export class Team extends Component{
    constructor(props){
        super(props);
        this.state={
            files:null
        }
    }
    handleChange=(files)=>{
        this.setState({
            files:files
        })
    }
    handleSave=()=>{
        let bucketName='images'
        let file=this.state.files[0]
        let storageRef=firebase.storage().ref('images/{file.name}')
        let uploadTask=storageRef.put(file)
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{
                let downloadURL=uploadTask.snapshot.downloadURL
            })
        /*this.showImage();  */
    }
    /*showImage=()=>{
        let storageRef=firebase.storage().ref()
        let spaceRef=storageRef.child('images/'+'{file.name}')
        storageRef.child('images/'+'{file.name}').getDownloadURL().then((url)=>{
            console.log(url)
            document.getElementById('new-img').src=url
        })
    }*/
    render(){
        /*this.showImage();*/
        return(
            <>
                <div  className="imagefile">
                <img id="new-img" className="showimgbtn" alt="profilepic"/> 
                <input type="file" onChange={(e)=>{this.handleChange(e.target.files)}}/>
                <br></br>    <br></br>
                <button onClick={this.handleSave}>Upload</button>
                <br></br>    <br></br>
                </div>
                <div className="leftcomp">
                    {/*<video className='videoquiz' src={video4} autoPlay loop muted/>*/}
                    <QuizBee/>
                </div>
                
            </>
            
        )
    }
}
export default Team;