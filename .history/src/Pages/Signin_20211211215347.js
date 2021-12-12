import React from 'react'
import {Link} from "react-router-dom"
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
 <Link to="/register">sign up</Link>
        </div>
    )
}

export default Signin
