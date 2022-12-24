import React from "react";
import "./search.css" ;
import Magnifier from "./magnifier.svg";

const SearchBox =({searchfield, searchChange})=> {
    return (
    <div className="search">
        <input className="search-input"
         type= "search"
          placeholder="search friends"
          onChange={searchChange}
          />

<a href="#" className="search-btn"><i className="fas fa-search"><img src={Magnifier} alt="just" /></i>
        </a>
        </div>
    );

};

export default SearchBox;