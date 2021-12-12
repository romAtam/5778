import React,{useState,useEffect} from 'react'
import styled from "styled-components";

export const TeamContainer=styled.div`
display:grid ;
grid-gap:20px ;
grid-template-columns:repeat(auto-fit,1fr) ;
justify-content:center ;
align-items:center ;
background-color:black;
color: white ;
`
const fetchTeam=async()=>{
    const teamJson=await fetch("https://api.github.com/users");
    const data=await teamJson.json()
    const newdata=data.map(user=>{
          return {
        login:data.login,
        id:data.id,
        avatar:data.avatar_url
    
    
    
    }
    return newdata
    })
  
}
const Team = () => {
    const[team,setTeam]=useState([{}]);
    useEffect(() =>
    setTeam(fetchTeam())
    ,[])
    return (
        <TeamContainer>
           {team.map(user=>(
               <div key={user.id}>
                   <img width='300' src={user.avatar} alt="avatar" />
                   <h2>{user.login}</h2>
               </div>
           ))}
        </TeamContainer>
    )
}

export default Team
