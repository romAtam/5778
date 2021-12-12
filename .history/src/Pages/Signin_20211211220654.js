import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
const FormWrapper=styled.div`
position:fixed;
top:0;
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

`
const Form=styled.form`
display:grid ;
width:50%;
height:50%;
`

const Signin = () => {
    return (
        <FormWrapper>
            <Form action="">
                <label htmlFor="name">name:</label>
                 <input type="text" placeholder="name"/>
                 <label htmlFor="email">email</label>
 <input type="email" placeholder="email"/>
 <button type="submit">sign in</button>

            </Form>
            <div>
                <p>create a new account</p>
 <Link to="/register">sign up</Link> 
            </div>

        </FormWrapper>
    )
}

export default Signin
