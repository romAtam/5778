import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
export const FormWrapper=styled.div`
position:fixed;
top:80px;
bottom:0;
right:0;
left:0;
width:100vw;
height:100vh;
background-color:black;
z-index:1;
display:grid;
grid-gap:20px;
justify-content:center;
align-items:center;
color:white;
padding:1rem 2rem;

`
export const Form=styled.form`
font-size:1.5rem;
display:grid ;
grid-gap:20px;
justify-content:center;
align-items:center;


`
export const Registdiv=styled.div`
display:grid;
font-size:1.5rem;
justify-content:center;
align-items:center;
padding:4rem 1rem;
`
export const Input=styled.input`
padding:10px 15px;
margin-left:10px;
border-radius:8px;

`
export const Layout=styled.div`
position:sticky;
top:0;
left:0;
height:80px;
display:grid;
justify-content:start;
align-items:start;
z-index:999;



`

const Signin = ({loginUser}) => {
    const [userName,setUserName]=useState('')
    const[userEmail,setUserEmail]=useState('')
    const handleUser=(e)=>{
        e.preventDefault();
        loginUser(userEmail,userName)
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

export default Signin
