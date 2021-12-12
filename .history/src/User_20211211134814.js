import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
const User = () => {
    const params=useParams()
  

    return (
        <div>
            {params}
        </div>
    )
}

export default User
