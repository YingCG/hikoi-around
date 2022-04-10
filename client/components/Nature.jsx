import React from "react";
import {NavLink} from "react-router-dom";

function Nature (){
    return (
        <>
            <div className='main'>
            <div id="map"></div>

            <NavLink exact activeClassName='active-link' to='/nature/nzbirds' >NZ  Birds</NavLink>

      </div>

        </>
    )
}

export default Nature
