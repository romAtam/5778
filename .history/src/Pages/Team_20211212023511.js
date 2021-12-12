import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import {Link,Outlet} from "react-router-dom"
export const TeamContainer=styled.div`
display:grid ;
grid-gap:20px ;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr)) ;
justify-content:center ;
align-items:center ;
background-color:black;
color: white ;
@media(max-width:780px){
    margin-top:400px;
}
`
const UserPlace=styled.div`
width: 300px;
height: 300px;
background-color:black;
color: white;
`
const Team = () => {
    const[team,setTeam]=useState([{login:"fgh"}]);
   
    useEffect(() =>{
       const fetchTeam=async()=>{
    const teamJson=await fetch("https://api.github.com/users");
    const data=await teamJson.json()

    setTeam(data)
        console.log(data);
}
fetchTeam()
     
    }
   
    ,[])

    return (
        <> 
      
       
             <Outlet style={{marginTop:"480px"}}/>
       
        
         <TeamContainer>
       
           {team.map(user=>(
               <Link to={`${user.login}`}>
                       <div key={user.login}>
                   <img style={{borderRadius:"100%",marginBottom:"18px"}} width='200' src={user.avatar_url} alt="avatar" />
                   <h2 className="btn btn-secondary">{user.login}</h2>
               </div>
               </Link>
           
           ))}
        </TeamContainer>
        </>
      
    )
}

export default Team
