import React,{useState,useEffect} from 'react'
import {useParams,Outlet} from "react-router-dom"
const User = () => {
    const params=useParams()
  

    return (
        <div>


            hello
            {params}
       
        </div>
    )
}

export default User
