import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandigPage';
import {Route } from 'react-router-dom'
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import DataBase from './components/DataBase/DataBase';
import ByName from './components/ByName/ByName';
import Filter from './components/Filter/Filter';
import Created from './components/createdGame/Created';



function App() {
  
  return (
    <div className="App">
        
      <Route  exact path='/' component={LandingPage} />
      <Route path='/home' component={NavBar}/>
      {/* <Route path='/home' component={Filter}/> */}
      <Route exact  path='/home' component={Home}/>
      <Route exact  path='/home/created' component={Created}/>

      <Route exact  path='/home/name' component={ByName}/>
      <Route exact path='/home/database' component={DataBase}/>
      
      {/* <LandigPage/> */}
    </div>
  );
}

export default App;
