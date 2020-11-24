import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {
  
  state={
    username:"Gowri"
  }

  usernameChangedHandler=(event)=>{
    this.setState({username:event.target.value});
  }

  render() {
    return (
      <div className="App">              
        <UserInput 
            username={this.state.username}
            onchanged={this.usernameChangedHandler}
            ></UserInput>
        <UserOutput username={this.state.username}> </UserOutput>
        <UserOutput username='Gowri Krishnamurthy'> </UserOutput>
     </div>
    );
  }
}

export default App;
