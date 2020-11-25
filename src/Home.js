
import React, { Component, useState } from "react";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

const Home = (props) =>{
//ktu do vije Current User
    return(
      
      <div>
        
      <p>{props.User}</p>

      <div>
          <div>
              <p>Job Site</p>
              <Link to="/addNew">
              <p>Create</p>
      </Link>
              
              <p>Status</p>
          </div>
      </div>
      <Link to="/dashboard">
          Smth
      </Link>
      <button>Log out</button>

          
        
  
  </div>
  )
  }
  

  export default Home;