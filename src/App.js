import React, { Component, useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddNew from "./addNew"
import Dashboard from "./dashboard"
import Home from "./Home"

const App = (props) =>{

  const [currentUser, setCurrentUser] = useState("Anxhi")

  const handleIncomingInput = (event1, event2, event3) =>{
  
    const incomingInput = {
        name: event1,
        id: Math.random(),
        category: event2,
        pm: event3,
        status: "On Start"
      };

      setCurrentUser(incomingInput)
      console.log(currentUser)

  
  }
  return (
    <div>
     

     <Switch>
                <Route path="/Home" component={Home } User={currentUser}  exact />
                <Route path="/addNew" component={AddNew}   sendInput={handleIncomingInput}/>
                <Route path="/dashboard" component={Dashboard}  />
                <Route component={Error} />
            </Switch>
    
    
    </div>  
  );
}

export default App;
