
import './App.css';
import Nav from './Nav'
import {Routes,Route,useParams} from "react-router-dom"
import Home from "./Pages/Home"
import Game from "./Pages/Game"
import Web from "./Pages/Web"
import Team from "./Pages/Team"
import Signin from "./Pages/Signin"
import User from "./Pages/User"
import Register from "./Pages/Register"
import React,{useState,useEffect} from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./firebase"
function App() {
const [user,setUser]=useState({})
  const getUser =(email,name)=>{
setUser({email,name})
  }
  const auth = getAuth();
createUserWithEmailAndPassword(auth, user.email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  useEffect(() => {
  console.log(user);
  }, [user])
  return (
    <div className="App">
<Nav/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/game" element={<Game/>}/>
  <Route path="/web" element={<Web/>}/>
  <Route path="/team" element={<Team/>}>
      <Route path=":id" element={<User/>}/>
  </Route>

  <Route path="/signin" element={<Signin getUser={getUser}/>}/>
  <Route path="/register" element={<Register/>}/>
</Routes>



    </div>
  );
}




export default App;
