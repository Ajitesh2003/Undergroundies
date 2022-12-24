import React from "react";
import {friends} from "./friends";

const Card =(props)=>{
    return(
        <div className=" tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="it is" src={`https://robohash.org/${props.id}`} />
            <div>
                <h2>{props.name}</h2>
                
            </div>
            
        </div>

    );
}

export default Card;