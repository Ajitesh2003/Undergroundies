import React, {Component} from "react";
import Cardlist from "../Components/Cardlist";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import "./App.css";


class App extends Component {
    constructor(){
        super()
        this.state={
            friends: [], 
            searchfield: "" 
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response=> Response.json())
        .then(users=> this.setState({friends: users}))
       
    }

    onSearchChange=(event)=>{
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const {friends, searchfield}= this.state;
        const filteredfriends= friends.filter(friend=> {
            return friend.name.toLowerCase().includes(searchfield.toLowerCase());
        } );
if (!friends.length) {

    return <h1>Loading......</h1>
    
} else {

    return (<div className="tc">
    <h1 className="tc f1">UNDERGROUNDIES</h1>
    <SearchBox searchChange={this.onSearchChange} />
    <Scroll>
    <ErrorBoundary>
    <Cardlist friends={filteredfriends} />
    </ErrorBoundary>
    </Scroll>
    </div>
);
    
}
   
    };

};
export default App;