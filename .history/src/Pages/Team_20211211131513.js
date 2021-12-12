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
    const teamJson=await fetch()
}
const Team = () => {
    const[team,setTeam]=useState([]);
    useEffect(() =>
    
    ,[])
    return (
        <TeamContainer>
            team page
        </TeamContainer>
    )
}

export default Team
