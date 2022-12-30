import React from 'react'
import { Link } from "react-router-dom";

const GoToMenu = ()=>{
    return(
        <>
        <p>Welcome to food kitchen</p>
         <Link to="/food-items">Go To Menu</Link>
        
        </>
    )
}

export default GoToMenu;