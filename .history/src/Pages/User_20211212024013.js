import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import styled from "styled-components"
const Userdiv=styled.div`
position:absolute;
top:80px;
height:100vh;
background-color:rgba(5,5,5,0.6)

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
         
<img width="200" src={user.avatar_url} alt="user" />

               <p>{user.name}</p>
            <p>{user.location}</p>
            <p>{user.blog}</p>

       
        </Userdiv>
    )
}

export default User
