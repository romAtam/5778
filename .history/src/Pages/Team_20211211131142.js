import React from 'react'
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
    return (
        <TeamContainer>
            team page
        </TeamContainer>
    )
}

export default Team
