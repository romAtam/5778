import React,{useState,useEffect} from 'react'
import {useParams,Outlet} from "react-router-dom"
const User = () => {
    const params=useParams()
  

    return (
        <div>
            {params}
            <Outlet/>
        </div>
    )
}

export default User
