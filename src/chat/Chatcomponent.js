import React, { useRef, useState } from 'react';
import { render } from '@testing-library/react';
import './chatcomponent.css';
import {firebase,db,auth} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { NavLink } from 'react-router-dom';
import MsgFloatingbtn from '../components/MsgFloatingbtn';
function Chatcomponent(){
    const [user] = useAuthState(auth);
    return(
        <>
        <MsgFloatingbtn/>
          <div className='chatcomponent'>
              <header>
                  <h1 style={{fontSize:'20px'}}>ChatRoom</h1>
                  {/*⚛️🔥*/}
                  <SignOut />
              </header>

              <section>
                  {user ? <ChatRoom /> : <SignIn />}
              </section>
          </div>
        
        </>
    );
    
}
function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p className='guidelines'>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )
  
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  
  
  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage} className='chatform'>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" className='chatinput'/>
  
        <button type="submit" disabled={!formValue} className='sendbutton'>🕊️</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} className='chatimg'/>
        
        <p className='msgtext'>{text}</p>
      </div>
    </>)
  }

export default Chatcomponent;
