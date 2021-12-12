import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
const User = () => {
    const[user,setUser]=useState({})
    const {params}=useParams()
    useEffect(() =>{
        const fetchTeam=async()=>{
     const teamJson=await fetch("https://api.github.com/users");
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
            {params}
       
        </div>
    )
}

export default User
