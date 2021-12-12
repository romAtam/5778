import React from 'react'
import{NavLink} from "react-router-dom"
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
background-color:black;
@media (max-width: 768px){
    grid-template-columns: 1fr;
    /* height:100vh; */
    max-height:800px ;
}

`

const Nav = () => {



    return (
        <NavContainer>
               <NavLink className={`btn btn-primary ${(isActive)=>isActive?"active":" "}`} to="/">home</NavLink>
               <NavLink className="btn btn-primary" to="/web">web dev</NavLink>
               <NavLink className="btn btn-primary" to="/game">game dev</NavLink>
               <NavLink className="btn btn-primary" to="/team">team</NavLink>
               <NavLink className="btn btn-primary" to="/signin">sign in</NavLink>
        </NavContainer>
    )
}

export default Nav
