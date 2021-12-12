import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
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
        <div>
            <p>{user.name}</p>
            <p>{user.location}</p>
            <p>{user.blog}</p>

<img width="300" src={user.avatar_url} alt="user" />

            
       
        </div>
    )
}

export default User
