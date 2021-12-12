import React from 'react'
import{Link} from "react-router-dom"
import styled from "styled-components"

const NavContainer=styled.div`
display: grid;
grid-gap:20px;
justify-content:center;
align-items:center;
height:80px;
font-size:1.5rem;
padding:1rem 2rem;
border-bottom: 1px solid #000;
grid-template-columns: repeat(5,minmax(100px,200px));
@media (max-width: 768px){
    grid-template-columns: 1fr;
    height:100vh;
    max-height:800px ;
}

`
const Nav = () => {



    return (
        <NavContainer>
               <Link to="/">team</Link>
               <Link to="/">web dev</Link>
               <Link to="/">game dev</Link>
               <Link to="/">team</Link>
               <Link to="/">sign in</Link>
        </NavContainer>
    )
}

export default Nav
