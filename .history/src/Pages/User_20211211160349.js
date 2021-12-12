import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
const User = () => {
    const {params}=useParams()
  useEffect(() =>console.log(params),[params])

    return (
        <div>


            hello
            {params}
       
        </div>
    )
}

export default User
