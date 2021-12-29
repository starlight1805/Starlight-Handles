import React,{Component} from 'react';
import jsPDF from 'jspdf';

import screen1 from './Images/screen_1.png'
import screen2 from './Images/screen_2.png'
import screen3 from './Images/screen_3.png'
import screen4 from './Images/screen_4.png'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import screen5 from './Images/screen_5.png'
import screen6 from './Images/screen_6.png'
import video4 from './Videos/video7.mp4'

class Reports extends Component{
    pdfGenerate=()=>{
        var doc=new jsPDF('p','pt','a4');
        doc.html(document.querySelector('#content'),{
            callback:function(pdf){
                pdf.save('Starlight Handles.pdf')
            }
        });  
    }
    render(){
        return(
            <div className="reportsfullpage">
                <video className='videoquiz' src={video4} autoPlay loop muted/>
                <a  href='./Dashboard.apk' download>
                    <button type="button">Download the app for Android</button>
                </a>
                
                <a  href='./offerletter.pdf' download>
                    <button type="button" className='offerbtn'>Download my Offer Letter</button>
                </a>
                
                <div id='content' style={{fontFamily:"Sigmar One"}}>
                
                    <h1>INTERNSHIP OFFER LETTER</h1><br></br><br></br>
                    <p>Dear Vivek Vardhan Varkala, iLogitron  is pleased to extend to you this offer as anAndroidDesign Intern. By accepting this  letter, you begin  your  internship with us on 15thof January 2021. The internship  is of 3 months duration. Yourinternship with the Company is “at-will,” which means that either you or  the  Company  may  terminate  your  internship  at  any  time,  without  any  valid  cause  and without notice.</p>
                    <hr></hr>
                    <p>During  your  internship,  you  may  have  access  to  trade  secrets  and  confidential  business information   belonging  to  the  Company.  By  accepting  this  offer  of  employment,   you acknowledge that you must keep all of this information strictly confidential, and refrain from using  it  for  your  own  purposes  or  from  disclosing  it  to  anyone  outside  the  Company.  In addition,  you  agree that,  upon  conclusion  of  your  employment,  you  will  immediately  return to the Company all of its property, equipment, and documents, including electronically stored information</p>
                    <hr></hr>
                    <p>As  an AndroidDesign  Intern,  your  responsibility  would  be  to  involve  in  research  and development activities  for the development of the products. All the  necessary details will  be shared with you over time via emails. Your performance will be evaluated on a regular basis and will be graded inyour Internship Certificate</p>
                    <hr></hr>
                    <p>I Vivek Vardhan Varkala, accept internship offer with iLogitron Technologies Pvt Ltd on the terms and conditions set out in this letter</p>
                </div>
                <div className='reports'>
                    <button onClick={this.pdfGenerate}>Generate Pdf</button>
                </div>
            </div>
        );
    }
}

export default Reports;