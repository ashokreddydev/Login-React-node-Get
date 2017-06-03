import React, { Component } from 'react';
import {browserHistory} from 'react-router';


class Login extends Component {
    
   
      constructor (props) {
    super(props)
        this.state = {
          username:"",
            pwd:"",
            uservalid:"",
            pwdvalid:""
        };
    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.Login = this.Login.bind(this);
      }
      username(e) {
    this.setState({username:e.target.value});
       
      }
      password(e) {
    this.setState({pwd:e.target.value});
       
      }
    
    Login()
    {
     
         var user=this.state.username;
         var pwd=this.state.pwd;
            //console.log(user)
            //console.log(pwd)
           if(user)
               {
                  
                   this.setState({uservalid:""}); 
                   
                            if(pwd)
                       {

                           this.setState({pwdvalid:""}); 
                           browserHistory.push('/Wellcome?id='+user);

                       }
                        else
                        {

                             this.setState({pwdvalid:"Password Is Required"});
                        }
                   
               }
                else
                {

                     this.setState({uservalid:"UserName Is Required"});
                }
        
        
         
         
       
        
    }
  
    
    
  render() {
    return (
<div className="container">
	<div className="row">
		<div className="col-md-4 col-md-offset-4 text-center">
			<div className="search-box">
				<div className="caption">
					<h3>User Login</h3>
									</div>
				<div  className="loginForm">
					<div className="input-group">
						<input type="text" id="name" className="form-control"  onChange={this.username} placeholder="User Name" />
                            <p className="errormsg">{this.state.uservalid}</p>
						<input type="password" id="paw" className="form-control" onChange={this.password} placeholder="Password" />
                            <p className="errormsg">{this.state.pwdvalid}</p>
						<input type="submit" id="submit" className="form-control"  onClick={this.Login} value="Submit" />
					</div>
				</div>
			</div>
		</div>

	</div>
</div>
    );
  }
}

export default Login;
