import React from 'react'
import{Link} from "react-router-dom"
import styled from "styled-components"

const NavContainer=styled.div`
display: grid;
grid-gap:20px;
justify-content:center;
align-items:center;
height:80px;

`
const Nav = () => {



    return (
        <div>
               <Link to="/">team</Link>
               <Link to="/">web dev</Link>
               <Link to="/">game dev</Link>
               <Link to="/">team</Link>
               <Link to="/">sign in</Link>
        </div>
    )
}

export default Nav
