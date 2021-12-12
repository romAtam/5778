import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
const User = () => {
    const[user,setUser]=useState({})
    const {id}=useParams()
    useEffect(() =>{
        const fetchTeam=async()=>{
     const teamJson=await fetch(`https://api.github.com/user/${id}`);
     const data=await teamJson.json()
 
     setUser(data)
         console.log(data);
 }
 fetchTeam()
      
     }
    
     ,[])

    return (
        <div>


            hello
            {user.avatar_url}
       
        </div>
    )
}

export default User
