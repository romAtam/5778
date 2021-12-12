import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import{FormWrapper,Form,Input,Registdiv} from "./Signin/"

const Register = ({getUser}) => {
    const [userName,setUserName]=useState('')
    const[userEmail,setUserEmail]=useState('')
    const handleUser=(e)=>{
        e.preventDefault();
        getUser(userEmail,userName)
        setUserName('')
        setUserEmail('')
    }

    return (
    
         <FormWrapper>
            <Form onSubmit={handleUser} action="">
                <div>
                      <label htmlFor="name">name:</label>
                 <Input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="name"/>
                </div>
              <div>
                   <label htmlFor="email">email:</label>
 <Input value={userEmail} onChange={e=>setUserEmail(e.target.value)} type="email" placeholder="email"/>
              </div>
                
 <button className="btn btn-primary" type="submit">sign in</button>

            </Form>
            <Registdiv>
                <p>create a new account</p>
 <Link className="btn btn-primary"to="/register">sign up</Link> 
            </Registdiv>

        </FormWrapper>
    
       
    )
}

export default Register
