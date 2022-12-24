import React from "react";
import  Card  from "./Card";

const Cardlist=({friends})=>{ 
    return (
        <div>
             {friends.map((user,i)=>{
        return(
        <Card 
        key={i}
         id={friends[i].id} 
         name= {friends[i].name}
          />
          )
    }
    )
    }
         </div>

    );
}
export default Cardlist;