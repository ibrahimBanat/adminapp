import './App.css';
import Company from './Company'
import Footer from './Footer'
import LoginCard from './LoginCard'



import React, { Component } from 'react'
import Dashboard from './Dashboard';

class App extends Component {

  

  state = {
    screen: 'login'
  }
  
  render() {
    

    return (
      <div className="app">
        
        {this.state.screen === 'login' && (
          <div className="login__screen">
          
          <Company/>
          <div><LoginCard
              onNavigate={() => {
                this.setState(() => ({
                  screen: 'dashboard'
                }))
              }}/></div>

            <div className="footer__container"><Footer/></div>
      </div>
        
      
      )}
        
        {this.state.screen === 'dashboard' && (<Dashboard/>)}
        
      </div>
      
    )
  }
}




export default App
