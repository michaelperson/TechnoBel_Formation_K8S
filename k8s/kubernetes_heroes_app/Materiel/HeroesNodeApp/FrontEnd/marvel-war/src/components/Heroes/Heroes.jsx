import React, { Fragment } from "react"; 
import HeroesList from "./Heroes-list";
const   Heroes = (props)=>
{
    return(
        <Fragment>
            <h1>Heroes</h1>
            
            <HeroesList/>
        </Fragment>
    );
}

export default Heroes;