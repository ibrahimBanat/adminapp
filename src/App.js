import './App.css';
import Company from './Company'
import Footer from './Footer'
import LoginCard from './LoginCard'


import React, { Component } from 'react'
import Dashboard from './Dashboard';

class App extends Component {

  

  

  
  
  render() {
    

    return (
      <div className="app">
        
        
          <div className="login__screen">
          
          <Company/>
          <div><LoginCard/></div>

            <div className="footer__container"><Footer/></div>
      {/* </div>
      <Dashboard/>
      </div> */}
      </div>
      </div>
        
      
      
      
    
    )}
}




export default App
