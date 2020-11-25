import React, { Component, useState } from "react";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';


class Dashboard extends React.Component{

    state={
        Scaffold: [{id: 1, Item: "Anxhi"}],
        Shed: [],
        clicked: false

    };
    
render(){
    
return(
    <div className="container">
        <div>Scoffold</div>
        <div>Shed</div>
        
    </div>
)}
}

export default Dashboard;