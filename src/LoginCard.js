import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './Logincard.css';
import USERS_DATA from './users.data';


class LoginCard extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            username: '',
            password: '',
            // usersData: USERS_DATA

        }
    }

    handleChange = event => {
        event.preventDefault();

        const { value, name } = event.target;
      
        // console.log(value);
                this.setState({
                    [name]: value
                })
      }

      handleSubmit = event => {
        event.preventDefault();
        const { value } = event.target;
        event.target.value = this.state.username;
        this.setState(
            {username: value, password: '' },
        )

      }

    render() {
        return (
            <div className="login__card">
          
            <form className="login__form" onSubmit={this.handleSubmit}>
                <div className="login__heading">
                    <h2>x</h2>
                    <p>login to continue</p>
                </div>
                <input type="text" onChange={this.handleChange} value={this.state.password}  placeholder="Email Adress" required></input>
                <input type="password" placeholder="Password"></input>

                <div className="login__emailContainer">
                </div>
                <div className="login__passwordContainer">
                </div>

                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  id="rememberMe"
                  />
                <div className="login__chechbox">
                
                <label htmlFor="rememberMe">Remember Me</label>
                <label htmlFor="">Forgot Password?</label>
                </div>

                
                <button type="submit" className="login__button">LOGIN</button>
                
                
                <div>
                    <h5><span>Or</span></h5>
                </div>
                <div>
                    <button className="login__buttonSSO">LOGIN WITH SSO</button>
                </div>
            </form> 


            
            
        </div>
        )
    }
}


export default LoginCard
