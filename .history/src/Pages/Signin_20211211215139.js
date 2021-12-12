import React from 'react'
import {Navigate} from "react-router-dom"
const Signin = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="name">name:</label>
                 <input type="text" placeholder="name"/>
                 <label htmlFor="email">email</label>
 <input type="email" placeholder="email"/>
 <button type="submit">sign in</button>

            </form>
 <p>create a new account</p>
 <button onClick={<Navigate/>}>sign up</button>
        </div>
    )
}

export default Signin
