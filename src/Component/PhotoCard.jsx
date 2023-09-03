import React from "react";
import "../styles/PhotoCard.css"
import { Link } from "react-router-dom";

export const PhotoCard = ({id,url}) => {
    return(

        <Link to={`https://github.com/${id}`} >
        
        <div id="photoCard">
            <img src={url} alt="" />
            <h1>{id}</h1>
        </div>
        
        </Link>
    )
}