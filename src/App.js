
import React, {useState,useEffect} from "react";
import {firebase} from "./firebase";
import Login from "./Login";
import Navbar from "./components/Navbar";
import Error from './pages/Error'
import Hero from "./Hero";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Reports from './pages/Reports';
import Support from './pages/Support';
import Products from './pages/Products';
import Team from './pages/Team';
import Account from './pages/Account';
import Cricket from './pages/Cricket';
import Community from './pages/Community';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Messages from './chat/Messages';
import Jokes from './jokes/jokes';
import Flipcard from './flippingcard/Flipcard';
import Jobs from './pages/Jobs';
import Techquiz from './techquiz/Techquiz';
import Faq from './components/Faq';


const App=()=> {
  const [user,setUser]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [emailError,setEmailError]=useState("");
  const [passwordError,setPasswordError]=useState("");
  const [hasAccount,setHasAccount]=useState(false);
  const [banner, setbanner] = useState(true);


  const clearInputs=()=>{ 
    setEmail('');
    setPassword('');
  }

  const clearErrors=()=>{
    setPasswordError('');
    setEmailError('');
  }

  const handleLogin=()=>{
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err=>{
        switch(err.code){
          case "auth/invallid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignUp=()=>{
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLogout=()=>{
    firebase.auth().signOut();
  }

  const authListener=()=>{
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        clearInputs();
        setUser(user);
        
      }else{
        setUser("");
      }
    })
  }

  useEffect(()=>{
    authListener();
  },[]);
  return (
    <div className="App">
      
      <>  
          
          <Router>
            <Navbar handleLogout={handleLogout} name={email}/>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/reports' component={Reports}/>
              <Route path='/products' component={Products}/>
              <Route path='/support' component={Support}/>
              <Route path='/quiz' component={Techquiz}/>
              <Route path='/account' component={Account}/>
              <Route path='/jobs' component={Jobs}/>
              <Route path='/community' component={Community}/>
              <Route path='/messages' component={Messages}/>
              <Route path='/about' component={About}/>
              <Route path='/jokes' component={Jokes}/>
              <Route path='/getintouch' component={Flipcard}/>
              <Route path='/faq' component={Faq}/>
              <Route component={Error} />
            </Switch>
          </Router>
        </>
    </div>
    
  );
};

export default App;
