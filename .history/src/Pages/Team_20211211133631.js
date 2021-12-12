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

const Team = () => {
    const[team,setTeam]=useState([{}]);
    useEffect(() =>{
       const fetchTeam=async()=>{
    const teamJson=await fetch("https://api.github.com/users");
    const data=await teamJson.json()

    setTeam(data)
        console.log(team);
}
fetchTeam()
     
    }
   
    ,[])
    return (
        <TeamContainer>
            hello
           {/* {team.map(user=>(
               <div key={user.id}>
                   <img width='300' src={user.avatar} alt="avatar" />
                   <h2>{user.login}</h2>
               </div>
           ))} */}
        </TeamContainer>
    )
}

export default Team
