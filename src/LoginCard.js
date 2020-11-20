import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import './Logincard.css';









class LoginCard extends React.Component {
    

    render() {

        const {onNavigate} = this.props
        return (


            <div className="login__card">
          
            <form className="login__form" onSubmit={this.handleSubmit}>
                <div className="login__heading">
                    <h2>Welcome</h2>
                    <p>login to continue</p>
                </div>
                

                <div className="login__emailContainer">
                    <input type="text" placeholder="Email Adress" ></input>
                    <input type="password"  placeholder="Password"></input>
                </div>
                


                
                <div className="login__chechbox">
                    <div className="login__inputCheckbox">
                        <input type="checkbox" id="RemmberMe" name="Checkbox"></input>
                        <label for="RemmberMe"> Remmber Me</label>
                    </div>
                    
                    <div>Forgot Password</div>
                
                </div>

                
                <button type="submit" onClick={onNavigate} 
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
