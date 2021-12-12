import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import styled from "styled-components"
import {Link} from "react-router-dom"
const Userdiv=styled.div`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
width:100vw;
height:100vh;
background-color:rgba(5,5,5,0.6);
z-index:10;
display:grid;
justify-content:center;
align-items:center;
color:white;

`
const Linkr=styled(Link)`
position:absolute;
top:0;
right:0;
`
const User = () => {
    const[user,setUser]=useState({})
    const {id}=useParams()
    useEffect(() =>{
        const fetchTeam=async()=>{
     const teamJson=await fetch(`https://api.github.com/users/${id}`);
     const data=await teamJson.json()
 
     setUser(data)
         console.log(data);
 }
 fetchTeam()
      
     }
    
     ,[id])

    return (
        <Userdiv>
            <div style={{width:"300px", height:"300px",position:"relative"}}>
                <Linkr className="btn btn-primary" to="/team">x</Linkr>
                <img width="100%" src={user.avatar_url} alt="user" />
<div>
      <p>{user.name}</p>
            <p>{user.location}</p>
            <p>{user.blog}</p>
</div>
             
            </div>
         


       
        </Userdiv>
    )
}

export default User
