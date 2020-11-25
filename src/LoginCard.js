import React from 'react'
import './Logincard.css';
import users from './api/users';








class LoginCard extends React.Component {

    state = {
        users: [],
        currentUser: '',
        userPassword: '',
        err: ''
      }
      usersFetched = async () => {
        const data = await users;
        // console.log('Before setSate',data);
        this.setState({users: data});
        // console.log('State Value',this.state.users);
      }
    
      setCurrentUser = (event) => {
        // Set the user to state if it exist.
        this.setState({currentUser: event.target.value})
      }
      setPassword = (event) => {
        // Set the password to state if it exist.
        this.setState({userPassword: event.target.value})
      }
    
    
      checkUsers = () => {
        // check if the user founded
        const userFounded = this.state.users.find(user => user.userName === this.state.currentUser);
        const passwordMatch = this.state.users.find(user => user.Password === this.state.userPassword);
    
        if(userFounded && passwordMatch) {
            console.log('the user logged in', this.state.currentUser);
            console.log('the user pass', this.state.userPassword);
        } else {
            console.log('Filed to login');
        }
    
      }
    
      onSubmitData = (event,currentUser) => {
        // Submit the from data
        event.preventDefault();
        this.usersFetched();
        this.checkUsers(currentUser);
      }
    

    render() {

        
        return (


            <div className="login__card">
          
            <form className="login__form" onSubmit={this.onSubmitData} action="">
                <div className="login__heading">
                    <h2>Welcome</h2>
                    <p>login to continue</p>
                </div>
                

                <div className="login__emailContainer">
                    <input type="text" value={this.state.currentUser} onChange={this.setCurrentUser} placeholder="Email Adress" required></input>
                    <input type="password" value={this.state.userPassword} onChange={this.setPassword}  placeholder="Password" required></input>
                </div>
                


                
                <div className="login__chechbox">
                    <div className="login__inputCheckbox">
                        <input type="checkbox" id="RemmberMe" name="Checkbox"></input>
                        <label for="RemmberMe"> Remmber Me</label>
                    </div>
                    
                    <div>Forgot Password</div>
                
                </div>

                
                <button type="submit"  
                className="login__button">LOGIN</button>
                
                
                <div className="seprator">
                    <h6><span>Or</span></h6>
                </div>
                <div>
                    <button onSubmit={this.consolLog} className="login__buttonSSO">LOGIN WITH SSO</button>
                </div>
            </form> 


            
            
        </div>
        )
    }
}


export default LoginCard
