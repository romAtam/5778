
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
 const auth = getAuth();

  const getUser =async(email,name)=>{
    try{
      const user=await createUserWithEmailAndPassword(auth, email,name)
      console.log(user.user);
      const newUser ={
        imail:user.user.imail,
        createDate:user.user.createDate,
        id:user.user.uid,
        token:user.user.token
      }
      console.log(newUser);
    }catch(e){
      console.log(e.message);
    }



  }
 

  // .then((userCredential) => {
   
  //   const user = userCredential.user;
  //  console.log(user.metadata.creationTime);
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorMessage);
  //   // ..
  // });
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
  <Route path="/register" element={<Register  getUser={getUser}/>}/>
</Routes>



    </div>
  );
}




export default App;
