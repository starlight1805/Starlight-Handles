import React, { useState, useEffect }  from "react";
import "../assets/Feedbackform.css";
import {db} from '../firebase'
import man from './Images/man5.png'


const Feedbackform = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("feedbacks")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
      <div className='feedback'>
          
          <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <p style={{width:'100%',backgroundColor:'lightyellow',padding:'20px',fontFamily:'Cantarell',top:'-10%'}}>Hi! Let us know how we can help and we’ll respond shortly.</p>
            <input
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            
            <textarea
              placeholder="How can we help?*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
              SUBMIT
            </button>
          </form>
  
      </div>
    
  );
  };

export default Feedbackform;